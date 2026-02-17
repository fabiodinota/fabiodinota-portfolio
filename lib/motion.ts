/**
 * Shared motion/animation constants used across the site.
 */

/** Smooth custom easing curve used throughout the site */
export const EASE_SMOOTH = [0.2, 0.005, 0.0, 0.995] as const;

/** Standard spring transition for interactive elements (social links, buttons) */
export const springTransition = {
	type: "spring" as const,
	damping: 20,
	stiffness: 300,
};

/** Standard hover/tap scale props for interactive icons */
export const hoverTapScale = {
	whileHover: { scale: 1.05 },
	whileTap: { scale: 0.95 },
};

/**
 * Creates a fade-in-up animation config.
 * @param delay — delay in seconds
 * @param y — initial Y offset (default: 50)
 */
export function fadeInUp(delay: number, y: number = 50) {
	return {
		initial: { opacity: 0, y },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 1, delay, ease: EASE_SMOOTH },
	};
}

/**
 * Creates a slide-down reveal animation config (used for hero text).
 * @param delay — delay in seconds
 * @param y — initial Y offset (default: -100)
 */
export function slideDown(delay: number, y: number = -100) {
	return {
		initial: { y },
		animate: { y: 0 },
		transition: { duration: 0.7, delay, ease: EASE_SMOOTH },
	};
}
