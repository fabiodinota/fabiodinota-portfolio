"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import HomeProjectCard from "./home-project-card";
import { FeaturedProjectsList } from "@/app/data/projects";

const AUTO_SCROLL_SPEED = 0.3; // px per frame — slow, smooth drift

const Marquee = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number>(0);
	const offsetRef = useRef(0);
	const isDraggingRef = useRef(false);
	const dragStartXRef = useRef(0);
	const dragStartOffsetRef = useRef(0);
	const lastPointerXRef = useRef(0);
	const velocityRef = useRef(0);
	const [, forceRender] = useState(0);

	// Width of one set of cards (half the track)
	const getSetWidth = useCallback(() => {
		if (!trackRef.current) return 0;
		return trackRef.current.scrollWidth / 2;
	}, []);

	// Clamp offset so it wraps seamlessly
	const wrapOffset = useCallback(
		(offset: number) => {
			const setWidth = getSetWidth();
			if (setWidth === 0) return 0;
			// Keep offset in range [0, -setWidth)
			let wrapped = offset % setWidth;
			if (wrapped > 0) wrapped -= setWidth;
			return wrapped;
		},
		[getSetWidth],
	);

	// Animation loop: auto-scroll + momentum decay
	const animate = useCallback(() => {
		if (!isDraggingRef.current) {
			// Apply momentum
			if (Math.abs(velocityRef.current) > 0.1) {
				offsetRef.current += velocityRef.current;
				velocityRef.current *= 0.95; // decay
			} else {
				velocityRef.current = 0;
				// Auto-scroll when no momentum
				offsetRef.current -= AUTO_SCROLL_SPEED;
			}
		}

		offsetRef.current = wrapOffset(offsetRef.current);

		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
		}

		rafRef.current = requestAnimationFrame(animate);
	}, [wrapOffset]);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafRef.current);
	}, [animate]);

	// ─── Pointer (mouse + touch) events ────────────────────────────

	const handlePointerDown = useCallback(
		(e: React.PointerEvent) => {
			isDraggingRef.current = true;
			velocityRef.current = 0;
			dragStartXRef.current = e.clientX;
			dragStartOffsetRef.current = offsetRef.current;
			lastPointerXRef.current = e.clientX;

			// Capture pointer for reliable tracking outside element
			(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		},
		[],
	);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent) => {
			if (!isDraggingRef.current) return;

			const dx = e.clientX - dragStartXRef.current;
			offsetRef.current = dragStartOffsetRef.current + dx;

			// Track velocity for momentum
			velocityRef.current = e.clientX - lastPointerXRef.current;
			lastPointerXRef.current = e.clientX;
		},
		[],
	);

	const handlePointerUp = useCallback(() => {
		isDraggingRef.current = false;
	}, []);

	// Keyboard navigation
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			const step = 200;
			if (e.key === "ArrowLeft") {
				offsetRef.current += step;
				velocityRef.current = 0;
			} else if (e.key === "ArrowRight") {
				offsetRef.current -= step;
				velocityRef.current = 0;
			}
		},
		[],
	);

	return (
		<div
			className="h-full w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
			onKeyDown={handleKeyDown}
			tabIndex={0}
			role="region"
			aria-label="Featured projects carousel. Use left and right arrow keys or drag to navigate."
			aria-roledescription="carousel"
		>
			<div
				ref={trackRef}
				className="h-full flex flex-row w-max p-5 gap-5"
				style={{ willChange: "transform" }}
			>
				{/* First set */}
				{FeaturedProjectsList.map((project, index) => (
					<HomeProjectCard
						title={project.title}
						description={project.description}
						link={project.link}
						image={project.image}
						index={index}
						key={project.slug}
						caseStudySlug={project.caseStudySlug}
					/>
				))}
				{/* Duplicate for seamless loop */}
				{FeaturedProjectsList.map((project, index) => (
					<HomeProjectCard
						title={project.title}
						description={project.description}
						link={project.link}
						image={project.image}
						index={index}
						key={`dup-${project.slug}`}
						caseStudySlug={project.caseStudySlug}
					/>
				))}
			</div>
		</div>
	);
};

export default Marquee;
