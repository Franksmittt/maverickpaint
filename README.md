🛠️ Maverick Painting: Asset Maintenance Partner Website
This repository contains the source code for the Maverick Painting corporate website, built on the Next.js 16 (App Router) framework. The project follows the Juggernaut-Hyperion Architectural Blueprint, prioritizing strict code quality, server-side performance, and an SEO-first, high-conversion content structure.
1. Project Overview & Strategy
The website is strategically designed to pivot Maverick Painting from a standard "painting contractor" to a "Premier Asset Maintenance Partner" targeting high-value commercial, industrial, and body corporate clients in Gauteng.
Key Strategic Pillars:
Pillar
Focus
Implementation
Central Thesis
Structure over Cosmetics
The entire Structural Repairs Silo (Spalling, Crack Injection) is built to prove defect remediation capability before painting.
Unique Selling Proposition (USP)
Independent QA
The Cornerstone Page (/our-process-independent-qa) and the reusable QAModule on every service page guarantee verifiable, third-party-inspected quality.
Conversion Engine
Type-Safe Server Actions
All forms use Next.js Server Actions with Zod validation (app/actions.ts) to ensure secure, end-to-end type safety and high conversion rates.
Design Ethos
High Contrast
Uses a Primary Black background with high-visibility Secondary Blue and Tertiary Green accents for a professional, high-end look.

Brand Color Palette
Name
Hex Value
Usage
Primary
#121111 (Black)
Header Background, Final CTA Background, Main Text (on white).
Secondary
#5AD5E2 (Blue)
Key links, Hover states, Trust Bar icon accent, Structural Silo focus.
Tertiary
#A9D834 (Green)
Primary CTA buttons (Background), USP accents, Structural accent borders.
White
#FFFFFF
Core content backgrounds, High-contrast headings (on black).

2. Technical Architecture (Juggernaut Pipeline)
This project strictly adheres to the "Juggernaut" philosophy for build integrity, ensuring the codebase is stable from the IDE through deployment.
2.1 Core Stack
Feature
Standard
Purpose
Framework
Next.js 16 (App Router)
Runs on stable Turbopack and the React Compiler for optimal performance.
Package Manager
pnpm
Mandated for strict dependency resolution (eliminates "phantom dependencies").
Styling
Tailwind CSS + shadcn/ui
Uses the components.json blueprint for a centralized, theme-able CSS variable system.
State
Zod/RHF/Server Actions
Server-side validation, client-side state, and streamlined database mutation.

2.2 Quality Assurance (QA) Pipeline
The build is binary (pass/fail). Quality is enforced via a multi-layered system:
ESLint Flat Config (eslint.config.mjs): Uses the modern format. All rules are configured as 'error' or 'off' (no warnings allowed).
Husky & lint-staged: The pre-commit hook runs eslint --fix on staged files, preventing errors from entering the Git history.
.npmrc (node-linker=isolated): pnpm's strict mode, forcing explicit dependency declarations to guarantee a stable build.
3. Deployment & Development
3.1 Getting Started & Installation History
This project was bootstrapped using pnpm and the recommended Next.js 16 flags, followed by necessary component and QA pipeline installations.
Initial Setup Command:
pnpm create next-app maverickpaint25 --ts --eslint --tailwind --app --react-compiler --no-src-dir --import-alias "@/*"


Core Dependency Installation:
pnpm install class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react next-themes react-hook-form zod @hookform/resolvers @next/third-parties zustand
pnpm add -D husky lint-staged @radix-ui/react-icons @typescript-eslint/eslint-plugin @typescript-eslint/parser


Development Commands:
Install Dependencies: pnpm install
Start Dev Server: pnpm dev
Run Lint Check (CI/CD check): pnpm lint
3.2 GitHub Push Commands (First Commit)
To push this existing repository structure to the newly created GitHub repository (Franksmittt/maverickpaint), use the following commands from the project root (C:\Users\User1\maverickpaint25):
# Set the remote origin (do this only once)
git remote add origin [https://github.com/Franksmittt/maverickpaint.git](https://github.com/Franksmittt/maverickpaint.git)

# Rename the current branch to 'main'
git branch -M main

# Add all files to the staging area
git add .

# Create the first commit
git commit -m "feat: Initial commit of Maverick Painting Next.js 16 core architecture"

# Push the 'main' branch to the remote repository
git push -u origin main


4. Image Asset Requirements (Final Steps)
The site requires image files for the Accreditations Page (/accreditations/page.tsx) and the Project Spotlight (app/_components/project-spotlight.tsx). These files must be created for the site to function optimally.
Required Image Paths (/public/images/logos/):
Location
File Name
Content Focus
Accreditations
public/images/logos/sika.png
Sika Approved Contractor Logo
Accreditations
public/images/logos/plascon.png
Plascon Preferred Applicator Logo
Accreditations
public/images/logos/dulux.png
Dulux Accredited Painter Logo
Accreditations
public/images/logos/marmoran.png
Marmoran Master Applicator Logo
Services Overview
public/images/structural-repair.jpg
Technical Work (e.g., Spalling Repair)
Projects
public/images/munyaka.jpg
Featured Estate Projects (Must match filenames in project-spotlight.tsx)

Functional Check List (Completed Pages)
Page
Target URL
Primary SEO Keyword
Homepage
/
Asset Maintenance Partner
QA Cornerstone
/our-process-independent-qa
Independent Quality Assurance
Waterproofing Pillar
/waterproofing-services
Expert Waterproofing Contractors
Blog Hub
/blog
Technical Guides & Expert Insights
Local SEO
/painting-contractors-alberton
Painters & Waterproofing in Alberton
Utilities
/not-found
Custom 404 Page


