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

import { StaticImageData } from "next/image";

interface ProjectsProps {
    title: string;
    description: string;
    link: string;
    image: StaticImageData;
}

export const FeaturedProjectsList: ProjectsProps[] = [
    {
        title: "Perfect Team MMA",
        description: "Design & Development",
        link: "/projects",
        image: PerfectTeam,
    },
    {
        title: "Fabio Di Nota",
        description: "Design & Development",
        link: "/projects",
        image: Portfolio,
    },
    {
        title: "Beyond Vision",
        description: "Design & Development",
        link: "/projects",
        image: Beyond,
    },
]


export const DesignProjectsList: ProjectsProps[] = [
    {
        title: "Jouri De Ligt",
        description: "Developer Portfolio Design",
        link: "/projects",
        image: Jouri,
    },
    {
        title: "Cocoon",
        description: "Brand Page UI Design",
        link: "/projects",
        image: Cocoon,
    },
    {
        title: "FitBubble",
        description: "Mobile App Design",
        link: "/projects",
        image: FitBubble,
    },
    {
        title: "CB Crypto",
        description: "Fictional Crypto Platform",
        link: "/projects",
        image: CB,
    },
]


export const OtherProjectsList: ProjectsProps[] = [
    {
        title: "Azurite",
        description: "Agency Website Development",
        link: "/projects",
        image: Azurite,
    },
    {
        title: "Qillobyte",
        description: "Agency Website Development",
        link: "/projects",
        image: Qillobyte,
    },
    {
        title: "Beefy Blokes",
        description: "Crypto Minting Website Development",
        link: "/projects",
        image: BeefyBlokes,
    },
    {
        title: "FCHCI",
        description: "Medical Website Development",
        link: "/projects",
        image: FCHCI,
    },
    {
        title: "CBHS",
        description: "Medical Website Development",
        link: "/projects",
        image: CBHS,
    },
]

export const SchoolProjectsList: ProjectsProps[] = [
    {
        title: "PLP",
        description: "Fictional E-commerce Platform",
        link: "/projects",
        image: PLP,
    },
    {
        title: "Portfolio Kunstkaai",
        description: "School Portfolio Website",
        link: "/projects",
        image: PortfolioKunstkaai,
    },
    {
        title: "Picnic Table",
        description: "Picnic Table 3D Render",
        link: "/projects",
        image: Picnic,
    },
    {
        title: "Stair Render",
        description: "Stair 3D Render",
        link: "/projects",
        image: Trap,
    },
]