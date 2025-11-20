# Sekeco Portfolio Website

A modern portfolio website built with Nuxt 4, showcasing projects, articles, and testimonials with high performance and elegant design.

## ✨ Features

- 🎨 **Modern UI/UX** - Built with Nuxt UI and custom components with smooth animations
- 📝 **Content Management** - Nuxt Content for managing articles and projects with markdown
- 🎯 **SEO Optimized** - Built-in SEO with @nuxtjs/seo for maximum visibility
- 🌓 **Dark/Light Mode** - Automatic theme switching based on user preference
- 📱 **Fully Responsive** - Perfect design across all devices
- ⚡ **Performance First** - SSR/SSG with Nuxt 4 for lightning-fast loading
- 🎭 **Visual Effects** - Aurora background, grid patterns, and neon borders
- 📊 **Analytics Ready** - Google Analytics integration with nuxt-gtag
- 🔍 **TypeScript** - Full type safety for better development experience

## 🏗️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) - The Intuitive Vue Framework
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/) - Beautiful and accessible UI components
- **Content**: [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- **Styling**: TailwindCSS (via Nuxt UI)
- **Icons**: Iconify (Lucide & Simple Icons)
- **Animations**: Motion-v
- **SEO**: @nuxtjs/seo
- **Analytics**: nuxt-gtag
- **Utilities**: VueUse
- **Package Manager**: pnpm

## 📋 Prerequisites

Make sure you have installed:

- Node.js >= 18.x
- pnpm >= 10.x (recommended) or npm/yarn/bun

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd sekeco.github.io
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

Create a `.env` file in the project root:

```bash
# Site Configuration
NUXT_SITE_URL=http://localhost:3000
NUXT_SITE_NAME=Sekeco
NUXT_SITE_DESCRIPTION=Making a well furnished branding solely for what you're hoping

# Analytics (Optional)
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX
```

### 4. Run Development Server

```bash
pnpm dev
```

Open your browser to `http://localhost:3000` 🎉

## 📁 Project Structure

```
sekeco.github.io/
├── app/                          # Nuxt application directory
│   ├── app.config.ts            # App configuration & theme
│   ├── app.vue                  # Root component
│   ├── assets/                  # Static assets
│   │   ├── css/
│   │   │   └── main.css        # Global styles
│   │   └── icons/              # Custom icons
│   ├── components/              # Vue components
│   │   └── global/             # Auto-imported global components
│   │       ├── AuroraBackground.vue
│   │       ├── GridBackground.vue
│   │       └── NeonBorder.vue
│   └── pages/                   # File-based routing
│       ├── index.vue           # Homepage
│       ├── articles/           # Articles pages
│       │   ├── index.vue       # Articles list
│       │   └── [slug].vue      # Single article
│       ├── projects/           # Projects pages
│       │   ├── index.vue       # Projects list
│       │   └── [slug].vue      # Single project
│       └── testimonials/       # Testimonials pages
│           └── index.vue       # Testimonials list
│
├── content/                     # Markdown content files
│   ├── index.yml               # Homepage content
│   ├── articles/               # Blog articles
│   ├── projects/               # Portfolio projects
│   ├── team/                   # Team members
│   └── testimonials/           # Client testimonials
│
├── public/                      # Static files (served as-is)
│   └── projects/               # Project images
│
├── server/                      # Server-side code
│   └── tsconfig.json
│
├── shared/                      # Shared utilities & types
│   ├── types/
│   │   └── index.d.ts
│   └── utils/
│       └── enum.ts
│
├── content.config.ts            # Nuxt Content configuration
├── nuxt.config.ts              # Nuxt configuration
├── package.json                # Dependencies & scripts
├── pnpm-workspace.yaml         # pnpm workspace config
├── tsconfig.json               # TypeScript configuration
└── eslint.config.mjs           # ESLint configuration
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev                 # Start dev server
pnpm dev --host          # Expose to network

# Building
pnpm build              # Build for production
pnpm generate           # Generate static site (SSG)
pnpm preview            # Preview production build

# Code Quality
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix ESLint errors
pnpm typecheck          # Check TypeScript types

# Other
pnpm postinstall        # Prepare Nuxt (auto-runs after install)
```

## 📝 Content Management

### Adding Articles

Create a new markdown file in `content/articles/`:

```markdown
---
title: "Article Title"
description: "Brief article description"
publishedAt: "2025-11-20"
category: "Design"
tags: ["branding", "design"]
image: "/images/article-cover.jpg"
author: "Rasyid Ridho"
---

# Article content starts here

Write your article content with markdown...
```

### Adding Projects

Create a new markdown file in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
category: "Web Development"
tags: ["nuxt", "vue", "tailwind"]
image: "/projects/project-cover.jpg"
url: "https://example.com"
year: 2025
---

# Project details

Tell about your project...
```

### Adding Testimonials

Create a new markdown file in `content/testimonials/`:

```markdown
---
name: "Client Name"
role: "Position"
company: "Company Name"
avatar: "/avatars/client.jpg"
rating: 5
---

"Testimonial content here..."
```

## 🎨 Customization

### Theme Colors

Edit `app/app.config.ts` to change the color scheme:

```typescript
export default defineAppConfig({
	ui: {
		colors: {
			primary: "blue", // Primary color
			secondary: "purple", // Secondary color
			info: "sky",
			neutral: "zinc",
		},
	},
})
```

### Global Styles

Edit `app/assets/css/main.css` for custom global CSS.

### Component Styling

All UI components use Nuxt UI which can be customized via `app.config.ts`.

## 🌐 Deployment

### Static Hosting (Recommended)

Generate static site:

```bash
pnpm generate
```

Deploy the `.output/public` folder to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Firebase Hosting

### Server Hosting

Build for SSR:

```bash
pnpm build
```

Deploy the `.output` folder to:

- Node.js server
- Vercel
- Netlify
- Railway
- Render

### GitHub Pages

To deploy to GitHub Pages, add a workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: [main]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: pnpm/action-setup@v3
              with:
                  version: 10
            - uses: actions/setup-node@v4
              with:
                  node-version: 20
                  cache: "pnpm"
            - run: pnpm install
            - run: pnpm generate
            - uses: peaceiris/actions-gh-pages@v4
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./.output/public
```

## 🔧 Configuration

### Nuxt Config

`nuxt.config.ts` is the application configuration center:

- **Modules**: List of modules used
- **App**: Transition settings and layout config
- **Site**: SEO metadata and site info
- **Runtime Config**: Environment variables
- **OG Image**: Open Graph image settings
- **Google Analytics**: Tracking configuration

### TypeScript

This project is fully typed with TypeScript. Type definitions are in:

- `shared/types/index.d.ts` - Global types
- Component props use TypeScript interfaces

## 📱 Pages Overview

### Homepage (`/`)

Landing page with hero section, featured projects, and call-to-action.

### Articles (`/articles`)

- List view: Grid of all articles with filter and search
- Detail view: Full article with markdown rendering

### Projects (`/projects`)

- List view: Portfolio gallery with categories
- Detail view: Detailed project case study

### Testimonials (`/testimonials`)

Grid view of all client testimonials.

## 🎭 Components

### Global Components

Components in `app/components/global/` are auto-imported:

- **AuroraBackground** - Animated gradient background effect
- **GridBackground** - Subtle grid pattern overlay
- **NeonBorder** - Glowing border effect for cards

### Usage Example

```vue
<template>
	<AuroraBackground>
		<h1>Your content here</h1>
	</AuroraBackground>
</template>
```

## 🔍 SEO Best Practices

This project includes:

- ✅ Automatic meta tags per page
- ✅ Open Graph tags for social sharing
- ✅ Sitemap generation
- ✅ robots.txt
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Performance optimization

## 📊 Analytics

Google Analytics is automatically enabled in production. Set `NUXT_PUBLIC_GTAG_ID` in environment variables.

Event tracking is integrated for:

- Page views
- Navigation clicks
- External links
- User interactions

## 🤝 Contributing

Contributions welcome! Please:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rasyid Ridho**

- Website: [sekeco.github.io](https://sekeco.github.io)
- GitHub: [@rasyidly](https://github.com/rasyidly)

## 🙏 Acknowledgments

- [Nuxt Team](https://nuxt.com) - Amazing framework
- [Nuxt UI Team](https://ui.nuxt.com) - Beautiful components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Iconify](https://iconify.design) - Icon framework

## 📚 Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Nuxt Content Documentation](https://content.nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

Made with ❤️ by Sekeco Team
