import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Fabio Di Nota — Software Engineer & Designer",
		short_name: "Fabio Di Nota",
		description:
			"Portfolio of Fabio Di Nota, a software engineer and designer based in Antwerp, Belgium.",
		start_url: "/",
		display: "standalone",
		background_color: "#151515",
		theme_color: "#151515",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
