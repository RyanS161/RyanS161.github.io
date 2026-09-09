import type { HastPluginDefinition } from "satteri";

/**
 * The article column is capped at `max-w-3xl` (48rem) minus horizontal padding,
 * so a prose image is never laid out wider than ~704 CSS px. Astro derives its
 * default `sizes` from the image's intrinsic width and falls back to `100vw`,
 * which makes wide viewports download a much larger variant than they can show.
 * Pinning `sizes` to the real column width keeps the chosen variant honest.
 */
const PROSE_IMAGE_SIZES = "(min-width: 48rem) 704px, calc(100vw - 2rem)";

export function proseImageSizesPlugin(): HastPluginDefinition {
	return {
		name: "prose-image-sizes",
		element: {
			filter: ["img"],
			visit(node, ctx) {
				ctx.setProperty(node, "sizes", PROSE_IMAGE_SIZES);
			},
		},
	};
}
