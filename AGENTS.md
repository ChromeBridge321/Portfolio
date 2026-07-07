<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16.2.9** (App Router), **React 19.2.4**, **TypeScript 5**
- **Tailwind CSS 4** — no `tailwind.config.*` file; theme tokens defined via `@theme` in `app/globals.css`
- **MUI 9** (`@mui/material`, `@mui/icons-material`) with Emotion
- No test framework configured. No `test` script in package.json.

## Commands

```
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (core-web-vitals + typescript presets)
```

No typecheck script — `tsc --noEmit` if needed.

## Project structure

```
app/               # App Router pages (all client-rendered where needed)
  layout.tsx       # Root layout: Navbar + Footer wrapper
  globals.css      # Tailwind @import + custom @theme tokens
  page.tsx         # Home page
  proyectos/       # Projects page
  tecnologias/     # Technologies page
  hobbies/         # Hobbies page
  contacto/        # Contact page
components/        # navBar/, footer/ (shared layout components)
DB/                # Static data (proyectos.ts)
assets/            # Static images (imported via next/image)
```

## Conventions

- **Content language**: Spanish (all page text, component labels, data).
- **Path alias**: `@/*` → project root (use `@/components/...`, `@/DB/...`).
- **Client components**: pages that use state or browser APIs add `"use client"` at top.
- **Color tokens**: use `text-primary`, `bg-neutral-95`, `text-secondary-40`, etc. — these are Tailwind `@theme` custom properties, not standard Tailwind colors.
- **MUI icons**: imported individually from `@mui/icons-material`, not from barrel exports.
- **Images**: use `next/image` with static imports from `assets/` or `public/`.

## Available Skills and When to Load Them

Load these via the `skill` tool when the task matches. Do not load for unrelated work.

| Skill | When to load |
|---|---|
| `accessibility` | WCAG 2.2 audits, screen reader support, keyboard navigation, a11y fixes |
| `composition-patterns` | Refactoring components with boolean prop proliferation, compound components, render props, context providers, React 19 API changes |
| `frontend-design` | Building distinctive, production-grade UI — components, pages, layouts, landing pages, dashboards. Use when styling or beautifying any web UI |
| `next-best-practices` | Writing or reviewing Next.js code — RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, bundling |
| `next-cache-components` | Next.js 16 Cache Components — PPR, `use cache` directive, `cacheLife`, `cacheTag`, `updateTag` |
| `next-upgrade` | Upgrading Next.js to the latest version following official migration guides and codemods |
| `react-best-practices` | React/Next.js performance optimization — eliminating waterfalls, bundle size, server-side perf, re-render optimization, rendering perf, advanced patterns |
| `seo` | Search engine visibility — meta tags, structured data, sitemap optimization, search engine ranking |
| `tailwind-css-patterns` | Tailwind CSS styling — responsive design, layout, flexbox, grid, spacing, typography, colors, modern CSS best practices |
| `typescript-advanced-types` | Advanced TypeScript — generics, conditional types, mapped types, template literals, utility types for type-safe applications |

The following skills are installed but rarely needed for this portfolio project:
- `nodejs-backend-patterns` — Express/Fastify backend services, middleware, auth, database integration
- `nodejs-best-practices` — Node.js development principles, framework selection, async patterns

you have this skills available in .opencode folder in root project

### Workflow

1. When receiving a task, identify which skill(s) are relevant
2. Load the skill using the skill tool before starting
3. Follow the skill instructions during execution
4. If the task requires multiple skills, load all relevant ones

## Project Conventions
### Code
- Do not add comments unless the user requests it
- Follow the existing naming convention in the project
- Prefers to edit existing files rather than create new ones unless the user specifies that you should create files instead of editing the existing ones



## Question or request
Sometimes the user will say "pregunta," "esto es una pregunta" "responde," or similar words to refer to a question. This means the petition is a question, the user asks and you answer. 

## Before starting
Prioritize planning over execution. First, plan the route to follow before implementing a user's request. Let the user know the path you will take to carry out the task correctly. Always ask the user if you can proceed with the task once the plan is created. Once the user gives you their explicit approval, you can go ahead with implementation. Once implementing a change, make sure that the project always runs correctly without errors usin `npm run build`. in case of an error, correct it.

## Create commit
When the user says 'commit,' you should run git status in the terminal and create a commit with this structure: title and description of the changes. This commit should be text only dont crate the commit in terminal only the user need the text.