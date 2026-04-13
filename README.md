# Quantum Computing Roadmap Dashboard

A production-style React dashboard that converts a dense quantum learning report into an interactive, decision-ready experience. The app combines narrative intelligence, KPI summaries, multi-section analytics, and polished motion design to help ML engineers evaluate and execute a transition into quantum computing.

## Why This Project

Most technical roadmaps are either text-heavy or chart-heavy. This dashboard is intentionally both:

- Executive clarity for fast top-level understanding
- Deep technical detail for practitioners
- Structured visual storytelling across 8 linked sections
- Risk-aware guidance instead of hype-only positioning

## Key Features

- Hero intelligence panel with TLDR, score, and KPI cards
- 16-week interactive roadmap with expandable weekly details
- Knowledge and framework analysis (Qiskit, PennyLane, Cirq)
- Project lab with progressive filters (beginner to portfolio)
- Application maturity and career pathway visualization
- Verdict engine with insights, risks, hidden signals, and success conditions
- Desktop sidebar and mobile bottom navigation
- Theme persistence (dark/light) with global semantic design tokens
- Smooth section spy, scroll progress, and back-to-top utility

## Product Sections

The experience is organized into the following sections:

1. Hero
2. Roadmap
3. Knowledge
4. Frameworks
5. Projects
6. Applications
7. Careers
8. Verdict

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3 + PostCSS
- Recharts for data visualization
- Framer Motion for animation system
- Zustand for lightweight global state
- React Router DOM (available for multi-route expansion)
- Floating UI, Lucide React, TanStack Table, date-fns, numeral

## Architecture Snapshot

```text
src/
	components/
		charts/      # Reusable chart primitives
		layout/      # Sidebar, mobile nav, scroll utilities
		sections/    # Page-level domain sections
		ui/          # Shared UI building blocks
	data/
		dashboardData.js   # Single source of structured report intelligence
	hooks/
		useScrollSpy.js
		useCountUp.js
		useTheme.js
	store/
		dashboardStore.js  # Theme, active section, filters
	styles/
		globals.css        # Design tokens + global behavior
```

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Data Model and Content Strategy

All dashboard intelligence is centralized in `src/data/dashboardData.js`.

It includes:

- Meta framing and overall scoring
- KPI metrics and trend arrays
- Weekly learning plan and prerequisites
- Framework comparison data and simulator matrix
- Algorithms, projects, and application maturity
- Career paths with timelines
- Risks, hidden signals, and final verdict recommendations

This design enables content-first iteration without touching rendering logic in most cases.

## UI and Experience Principles

- Technical aesthetic with semantic color mapping
- Motion with purpose (entrance, focus, hierarchy)
- Responsive-first layout for desktop and mobile
- Accessibility-minded interactions:
	- focus-visible outlines
	- reduced-motion support
	- tabular numeric rendering where needed
- Print-aware global styles for document portability

## Build and Deployment

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` output to any static host:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Contribution Workflow

1. Create a feature branch
2. Implement scoped changes
3. Run `npm run lint`
4. Run `npm run build`
5. Open a PR with screenshots or short demo clips for UI changes

## Creator Credits

Created by **Yash Singh Thakur**

- Email: yashsinghthakur69@gmail.com
- Phone: 9098216189

## License

This project is currently private and intended for educational and portfolio purposes. Add a formal `LICENSE` file before public distribution.
