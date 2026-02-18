import type { Project } from "@/lib/types";
import type { StaticImageData } from "next/image";

import TheVelox from "@/public/covers/The Velox.png";
import PartyUpGG from "@/public/covers/PartyUp GG.png";
import AngryTanks from "@/public/covers/Angry Tanks.png";
import Portfolio from "@/public/projects/cover_fabiodinota.png";
import LemonTerminal from "@/public/covers/Lemon Terminal.png";
import PerfectTeamMMA from "@/public/covers/Perfect Team MMA.png";
import BeyondVision from "@/public/covers/Beyond Vision LTD.png";
import FitBubble from "@/public/covers/FitBubble.png";
import BrysonDeChambeau from "@/public/covers/Bryson DeChambeau.png";
import Dexcelerate from "@/public/covers/Dexcelerate.png";
import JouriDeLigt from "@/public/covers/Jouri De Ligt.png";

// Old project covers (still used in sub-pages)
import Jouri from "@/public/projects/cover_jouri.png";
import Cocoon from "@/public/projects/cover_cocoon.png";
import FitBubbleOld from "@/public/projects/cover_fitbubble.png";
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

// ── Legacy project type for old sub-pages ──────────────────────────

export interface LegacyProject {
	title: string;
	description: string;
	link: string;
	image: StaticImageData;
}

// ── Engineering Projects ───────────────────────────────────────────

export const EngineeringProjects: Project[] = [
	{
		title: "The Velox",
		slug: "the-velox",
		role: "Lead Systems Architect & Creative Director",
		tags: ["Next.js", "Node.js", "BFS Algorithms", "SVG Engineering"],
		summary:
			"A full-stack transit platform for a subaquatic dome. Features a custom-built routing engine synchronized with a manually indexed 8,000 LOC interactive SVG map.",
		highlight:
			'Awarded "Best Graduation Project" out of 50+ by industry juries.',
		description: "Full-Stack Transit Platform",
		image: TheVelox,
		link: "",
		category: "engineering",
		caseStudySlug: "the-velox",
	},
	{
		title: "PartyUp GG",
		slug: "partyup-gg",
		role: "Full-Stack Engineer",
		tags: ["Go", "Next.js", "Real-time", "Supabase"],
		summary:
			"A high-concurrency matchmaking and auction platform for Fortnite. Built using a hybrid monorepo to handle real-time bidding and low-latency session management.",
		highlight:
			"Implemented goroutine-based auction logic and real-time state synchronization.",
		description: "Real-time Matchmaking Platform",
		image: PartyUpGG,
		link: "",
		category: "engineering",
		caseStudySlug: "partyup-gg",
	},
	{
		title: "Angry Tanks",
		slug: "angry-tanks",
		role: "UI & Geometry Engineer",
		tags: ["Java", "JavaFX", "JBox2D", "Computational Geometry"],
		summary:
			"A 2D physics-based artillery game featuring real-time destructible terrain. Uses an ear clipping algorithm to dynamically triangulate and rebuild map polygons during gameplay.",
		highlight: "Custom SVG loader and real-time terrain deformation engine.",
		description: "Physics-Based Artillery Game",
		image: AngryTanks,
		link: "",
		category: "engineering",
		caseStudySlug: "angry-tanks",
	},
];

// ── Professional & Design Projects ─────────────────────────────────

export const ProfessionalProjects: Project[] = [
	{
		title: "Fabio Di Nota Portfolio",
		slug: "fabio-di-nota-portfolio",
		role: "Lead Engineer & Designer",
		tags: ["Next.js 16", "React 19", "TypeScript", "Resend"],
		summary:
			"A sophisticated, performance-first portfolio utilizing the React Compiler and latest App Router features. Features dynamic theming, a custom draggable marquee, and a server-side contact system.",
		highlight:
			"Migrated to the latest tech stack with a focus on speed, including automated sitemaps and manifest generation.",
		description: "Portfolio Design & Development",
		image: Portfolio,
		link: "https://fabiodinota.com",
		category: "professional",
	},
	{
		title: "Lemon Terminal",
		slug: "lemon-terminal",
		role: "Product Designer & QA Developer",
		tags: ["UI/UX", "QA Engineering", "Web3", "Product Strategy"],
		summary:
			"An all-in-one cryptocurrency trading platform. I bridged the gap between backend logic and the user interface to ensure a pixel-perfect trading experience across all devices.",
		description: "Crypto Trading Platform",
		image: LemonTerminal,
		link: "",
		category: "professional",
	},
	{
		title: "Perfect Team MMA",
		slug: "perfect-team-mma",
		role: "UI/UX Redesign & Frontend Development",
		tags: ["Figma", "Frontend", "Branding"],
		summary:
			"A complete digital transformation and brand refresh for a professional MMA training facility.",
		description: "Brand Refresh & Frontend",
		image: PerfectTeamMMA,
		link: "https://perfectteam.vercel.app",
		category: "professional",
	},
	{
		title: "Beyond Vision LTD",
		slug: "beyond-vision-ltd",
		role: "Full-Stack Product Delivery",
		tags: ["Next.js", "Design Systems", "Brand Identity"],
		summary:
			"End-to-end design and development for a marketing agency, creating their first scalable digital presence.",
		description: "Agency Website & Branding",
		image: BeyondVision,
		link: "https://beyondvisionltd.org",
		category: "professional",
	},
	{
		title: "FitBubble",
		slug: "fitbubble",
		role: "App Design & Prototyping",
		tags: ["Mobile Design", "UI/UX", "Figma"],
		summary:
			"A high-fidelity mobile application design focused on social fitness and active community engagement.",
		description: "Mobile App Design",
		image: FitBubble,
		link: "",
		category: "professional",
	},
	{
		title: "Bryson DeChambeau",
		slug: "bryson-dechambeau",
		role: "Lead Designer",
		tags: ["Visual Design", "Web Design"],
		summary:
			"A clean, high-impact landing page design focused on visual storytelling and elite sports branding.",
		description: "Landing Page Design",
		image: BrysonDeChambeau,
		link: "",
		category: "professional",
	},
	{
		title: "Dexcelerate",
		slug: "dexcelerate",
		role: "Interface Design",
		tags: ["Fintech", "Dashboard Design", "UI/UX"],
		summary:
			"A specialized trading interface design emphasizing data density and clarity for high-frequency traders.",
		description: "Trading Dashboard Design",
		image: Dexcelerate,
		link: "",
		category: "professional",
	},
	{
		title: "Jouri De Ligt",
		slug: "jouri-de-ligt",
		role: "Portfolio Design & Identity",
		tags: ["Portfolio Design", "Frontend"],
		summary:
			"A custom-designed portfolio for a front-end developer, focusing on typography, dark-mode aesthetics, and personal branding.",
		description: "Developer Portfolio Design",
		image: JouriDeLigt,
		link: "",
		category: "professional",
	},
];

// ── Derived exports ────────────────────────────────────────────────

/** All projects combined */
export const AllProjects: Project[] = [
	...EngineeringProjects,
	...ProfessionalProjects,
];

/** Top 3 featured projects for marquee (engineering) */
export const FeaturedProjectsList: Project[] = EngineeringProjects.concat(ProfessionalProjects);

// ── Legacy sub-page project lists ──────────────────────────────────

export const DesignProjectsList: LegacyProject[] = [
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
		image: FitBubbleOld,
	},
	{
		title: "CB Crypto",
		description: "Fictional Crypto Platform",
		link: "https://www.figma.com/proto/KMIX0ko78vqW8UCARD8vDk/Crypto-Site-Showcase?page-id=0%3A1&type=design&node-id=0-1&viewport=650%2C650%2C0.08&t=N0EUQTkXj3MWKRoC-1&scaling=scale-down&starting-point-node-id=0%3A6967&mode=design",
		image: CB,
	},
];

export const OtherProjectsList: LegacyProject[] = [
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

export const SchoolProjectsList: LegacyProject[] = [
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