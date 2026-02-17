import type { Project } from "@/lib/types";

import PerfectTeam from "@/public/projects/cover_perfectteam.png";
import Portfolio from "@/public/projects/cover_fabiodinota.png";
import Beyond from "@/public/projects/cover_beyondvision.png";

import Jouri from "@/public/projects/cover_jouri.png";
import Cocoon from "@/public/projects/cover_cocoon.png";
import FitBubble from "@/public/projects/cover_fitbubble.png";
import CB from "@/public/projects/cover_cb.png";

import PLP from "@/public/projects/cover_plp.png";
import PortfolioKunstkaai from "@/public/projects/cover_portfolio_kunstkaai.png";
import Trap from "@/public/projects/trap_fabiodinota.png";
import Picnic from "@/public/projects/picknicktafel_fabiodinota.png";

import Azurite from "@/public/projects/cover_azurite.png";
import Qillobyte from "@/public/projects/cover_qillobyte.png";
import BeefyBlokes from "@/public/projects/cover_beefyblokes.png";
import FCHCI from "@/public/projects/cover_fchci.png";
import CBHS from "@/public/projects/cover_cbhs.png";

export const FeaturedProjectsList: Project[] = [
	{
		title: "Perfect Team MMA",
		description: "Design & Development",
		link: "https://perfectteam.vercel.app",
		image: PerfectTeam,
	},
	{
		title: "Fabio Di Nota",
		description: "Design & Development",
		link: "https://fabiodinota.com",
		image: Portfolio,
	},
	{
		title: "Beyond Vision",
		description: "Design & Development",
		link: "https://beyondvisionltd.org",
		image: Beyond,
	},
];

export const DesignProjectsList: Project[] = [
	{
		title: "Jouri De Ligt",
		description: "Developer Portfolio Design",
		link: "https://xd.adobe.com/view/c33cb3fa-783f-4351-8de7-f445eff2a5a5-966f/",
		image: Jouri,
	},
	{
		title: "Cocoon",
		description: "Brand Page UI Design",
		link: "https://www.figma.com/proto/NlRNuR8jkIuEGXNrAXCXGo/Cocoon-Brand-Page-Showcase?page-id=0%3A1&type=design&node-id=1-39&viewport=393%2C566%2C0.11&t=btD38u0eALIlEmxl-1&scaling=min-zoom&mode=design",
		image: Cocoon,
	},
	{
		title: "FitBubble",
		description: "Mobile App Design",
		link: "https://www.figma.com/proto/OmQyqM5csmfl8yW2H4Aa56/FitBubble-Showcase?page-id=0%3A1&type=design&node-id=187-1207&viewport=68%2C449%2C0.2&t=21QwrayNTWwBpKhI-1&scaling=min-zoom&starting-point-node-id=187%3A1207&mode=design",
		image: FitBubble,
	},
	{
		title: "CB Crypto",
		description: "Fictional Crypto Platform",
		link: "https://www.figma.com/proto/KMIX0ko78vqW8UCARD8vDk/Crypto-Site-Showcase?page-id=0%3A1&type=design&node-id=0-1&viewport=650%2C650%2C0.08&t=N0EUQTkXj3MWKRoC-1&scaling=scale-down&starting-point-node-id=0%3A6967&mode=design",
		image: CB,
	},
];

export const OtherProjectsList: Project[] = [
	{
		title: "Azurite",
		description: "Agency Website Development",
		link: "https://azuritestudios.net",
		image: Azurite,
	},
	{
		title: "Qillobyte",
		description: "Agency Website Development",
		link: "https://qillobyte.vercel.app",
		image: Qillobyte,
	},
	{
		title: "Beefy Blokes",
		description: "Crypto Website Development",
		link: "https://beefy-blokes.vercel.app",
		image: BeefyBlokes,
	},
	{
		title: "FCHCI",
		description: "Medical Website Development",
		link: "https://fchci.org",
		image: FCHCI,
	},
	{
		title: "CBHS",
		description: "Medical Website Development",
		link: "https://cbhsi.com/",
		image: CBHS,
	},
];

export const SchoolProjectsList: Project[] = [
	{
		title: "PLP",
		description: "Fictional E-commerce Platform",
		link: "https://dinota.kunstkaai.online/internettechnieken/plp/index.php#",
		image: PLP,
	},
	{
		title: "Portfolio Kunstkaai",
		description: "School Portfolio Website",
		link: "https://dinota.kunstkaai.online/",
		image: PortfolioKunstkaai,
	},
	{
		title: "Picnic Table",
		description: "Picnic Table 3D Render",
		link: "",
		image: Picnic,
	},
	{
		title: "Stair Render",
		description: "Stair 3D Render",
		link: "",
		image: Trap,
	},
];