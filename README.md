# Fabio Di Nota | Software Engineer & Designer Portfolio

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-13.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)

A sophisticated personal portfolio website designed to showcase software engineering projects, design work, and technical skills. Built with performance and aesthetics in mind, this project utilizes the latest features of the Next.js App Router.

## ✨ Key Features

* **🎨 Dynamic Theming:** A robust Dark/Light mode toggler with custom SVG animations, managed via React Context (`themeContext.tsx`).
* **Hp Interactive UI:**
    * **Draggable Marquee:** A custom infinite scrolling project showcase on the homepage powered by Framer Motion.
    * **Animated Page Transitions:** Smooth entry and exit animations between routes.
    * **Lottie Animations:** High-quality vector animations for branding elements.
* **mdx Responsive Grid Layout:** A mobile-first approach ensuring seamless viewing on devices ranging from smartphones (`xs`) to large desktop screens (`2xl`).
* **FK Contact System:** Fully functional server-side email handling using **Resend** and **React-Email** templates.
* **📁 Categorized Projects:** Dedicated dynamic routing for various project types (Design, Lab, School, Featured).

## 🛠 Tech Stack

* **Framework:** [Next.js 13](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/) & [Lottie React](https://lottiefiles.com/)
* **Email Backend:** [Resend](https://resend.com/)
* **Deployment:** [Vercel](https://vercel.com)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js (v16.8 or later)
* npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/fabiodinota/fabiodinota-portfolio.git](https://github.com/fabiodinota/fabiodinota-portfolio.git)
    cd fabiodinota-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your API keys (required for the contact form):

    ```env
    RESEND_API_KEY=re_123456789
    EMAIL=your-verified-sender@domain.com
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

├── app/ # Next.js App Router source 
├ ├── globals.css # Global styles & Tailwind directives  
├ └── layout.tsx # Root layout 
├── api/ # Server-side API routes (Email sending) 
├── components/ # Reusable UI components (Marquee, Navbar, Cards) 
├── context/ # React Context (Theme provider) 
├── projects/ # Project category pages  
├── public/ # Static assets (Images, SVGs, Lottie JSONs) 
└── ...config files


## 📦 Build & Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the `RESEND_API_KEY` and `EMAIL` to the Vercel Environment Variables.
4.  Deploy!

To build locally:

```bash
npm run build
npm run start