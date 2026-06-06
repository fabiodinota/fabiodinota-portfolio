"use client";

import {
	useCallback,
	useEffect,
	useRef,
	type FocusEvent,
	type KeyboardEvent,
	type PointerEvent,
} from "react";

const DEFAULT_AUTO_SCROLL_SPEED = 36; // pixels per second
const MOMENTUM_DECAY_PER_SECOND = 3.2;
const KEYBOARD_STEP = 200;
const MAX_FRAME_DELTA_SECONDS = 0.064;

interface UseDraggableMarqueeOptions {
	autoScrollSpeed?: number;
}

export function useDraggableMarquee({
	autoScrollSpeed = DEFAULT_AUTO_SCROLL_SPEED,
}: UseDraggableMarqueeOptions = {}) {
	const trackRef = useRef<HTMLDivElement>(null);
	const loopRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number>(0);
	const offsetRef = useRef(0);
	const loopWidthRef = useRef(0);
	const isDraggingRef = useRef(false);
	const isHoverPausedRef = useRef(false);
	const isFocusPausedRef = useRef(false);
	const prefersReducedMotionRef = useRef(false);
	const dragStartXRef = useRef(0);
	const dragStartOffsetRef = useRef(0);
	const lastPointerXRef = useRef(0);
	const velocityRef = useRef(0);
	const lastTimestampRef = useRef<number | null>(null);

	const applyTransform = useCallback(() => {
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
		}
	}, []);

	const wrapOffset = useCallback((offset: number) => {
		const loopWidth = loopWidthRef.current;
		if (loopWidth <= 0) return 0;

		let wrapped = offset % loopWidth;
		if (wrapped > 0) wrapped -= loopWidth;
		return wrapped;
	}, []);

	const moveToOffset = useCallback(
		(offset: number) => {
			offsetRef.current = wrapOffset(offset);
			applyTransform();
		},
		[applyTransform, wrapOffset],
	);

	useEffect(() => {
		const loopElement = loopRef.current;
		if (!loopElement) return;

		const updateLoopWidth = () => {
			loopWidthRef.current = loopElement.getBoundingClientRect().width;
			moveToOffset(offsetRef.current);
		};

		updateLoopWidth();

		const resizeObserver = new ResizeObserver(updateLoopWidth);
		resizeObserver.observe(loopElement);

		return () => resizeObserver.disconnect();
	}, [moveToOffset]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

		const updatePreference = () => {
			prefersReducedMotionRef.current = mediaQuery.matches;
			if (mediaQuery.matches) {
				velocityRef.current = 0;
			}
		};

		updatePreference();
		mediaQuery.addEventListener("change", updatePreference);

		return () => mediaQuery.removeEventListener("change", updatePreference);
	}, []);

	useEffect(() => {
		const animate = (timestamp: number) => {
			const lastTimestamp = lastTimestampRef.current ?? timestamp;
			const deltaSeconds = Math.min(
				(timestamp - lastTimestamp) / 1000,
				MAX_FRAME_DELTA_SECONDS,
			);
			lastTimestampRef.current = timestamp;

			if (
				!isDraggingRef.current &&
				!isHoverPausedRef.current &&
				!isFocusPausedRef.current &&
				!prefersReducedMotionRef.current
			) {
				if (Math.abs(velocityRef.current) > 1) {
					offsetRef.current += velocityRef.current * deltaSeconds;
					velocityRef.current *= Math.exp(
						-MOMENTUM_DECAY_PER_SECOND * deltaSeconds,
					);
				} else {
					velocityRef.current = 0;
					offsetRef.current -= autoScrollSpeed * deltaSeconds;
				}
			}

			offsetRef.current = wrapOffset(offsetRef.current);
			applyTransform();

			rafRef.current = requestAnimationFrame(animate);
		};

		rafRef.current = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(rafRef.current);
	}, [applyTransform, autoScrollSpeed, wrapOffset]);

	const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
		if (
			event.target instanceof HTMLElement &&
			event.target.closest("a, button")
		) {
			return;
		}

		isDraggingRef.current = true;
		velocityRef.current = 0;
		dragStartXRef.current = event.clientX;
		dragStartOffsetRef.current = offsetRef.current;
		lastPointerXRef.current = event.clientX;
		event.currentTarget.setPointerCapture(event.pointerId);
	}, []);

	const handlePointerMove = useCallback(
		(event: PointerEvent<HTMLDivElement>) => {
			if (!isDraggingRef.current) return;

			const dx = event.clientX - dragStartXRef.current;
			moveToOffset(dragStartOffsetRef.current + dx);
			velocityRef.current =
				(event.clientX - lastPointerXRef.current) * 60;
			lastPointerXRef.current = event.clientX;
		},
		[moveToOffset],
	);

	const handlePointerUp = useCallback((event: PointerEvent<HTMLDivElement>) => {
		isDraggingRef.current = false;
		if (event.currentTarget.hasPointerCapture(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}
	}, []);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				velocityRef.current = 0;
				moveToOffset(offsetRef.current + KEYBOARD_STEP);
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				velocityRef.current = 0;
				moveToOffset(offsetRef.current - KEYBOARD_STEP);
			}
		},
		[moveToOffset],
	);

	const handleMouseEnter = useCallback(() => {
		isHoverPausedRef.current = true;
	}, []);

	const handleMouseLeave = useCallback(() => {
		isHoverPausedRef.current = false;
	}, []);

	const handleFocus = useCallback(() => {
		isFocusPausedRef.current = true;
	}, []);

	const handleBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
		const nextFocusedElement = event.relatedTarget;
		if (
			nextFocusedElement instanceof Node &&
			event.currentTarget.contains(nextFocusedElement)
		) {
			return;
		}

		isFocusPausedRef.current = false;
	}, []);

	return {
		trackRef,
		loopRef,
		containerProps: {
			onPointerDown: handlePointerDown,
			onPointerMove: handlePointerMove,
			onPointerUp: handlePointerUp,
			onPointerCancel: handlePointerUp,
			onKeyDown: handleKeyDown,
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave,
			onFocus: handleFocus,
			onBlur: handleBlur,
		},
	};
}
