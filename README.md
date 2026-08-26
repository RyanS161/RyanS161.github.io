# ryanslocum.com

Personal portfolio site built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [MDX](https://mdxjs.com). Deployed to GitHub Pages at [ryanslocum.com](https://ryanslocum.com).

## Structure

```
content/projects/   ← one .md file per project or publication
public/
  resume.pdf        ← resume (replace to update)
  images/           ← project images
src/
  pages/
    index.astro     ← home page (bio, education, experience)
    projects/
      index.astro   ← projects listing
      [slug].astro  ← individual project detail pages
  site.config.ts    ← site title, URL, nav links, social links
```

## Adding a project

Create a new file in `content/projects/` with this frontmatter:

```md
---
title: "My Project"
type: "project"          # project | paper | poster | thesis | preprint
description: "One-sentence summary shown on the listing page."
year: 2025
featured: false          # true puts it at the top of the list
image: "/images/projects/my-image.png"   # optional thumbnail
links:
  - label: "GitHub"
    url: "https://github.com/..."
  - label: "Report"
    url: "/images/projects/my-report.pdf"
venue: "ICRA 2025"       # optional, for papers
---

Full write-up goes here. Standard markdown, images supported.
```

The slug (URL) is derived from the filename, e.g. `my-project.md` → `/projects/my-project/`.

## Commands

| Command        | Action                                  |
| :------------- | :-------------------------------------- |
| `pnpm install` | Install dependencies                    |
| `pnpm dev`     | Start dev server at `localhost:4321`    |
| `pnpm build`   | Build to `./dist/`                      |
| `pnpm preview` | Preview production build locally        |

## Deploy

Pushes to `main` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`).

[Dependabot](https://docs.github.com/en/code-security/dependabot) is configured to open weekly PRs for npm and GitHub Actions dependency updates — merge them and the deploy fires automatically.

### Custom domain & HTTPS

The `public/CNAME` file sets the custom domain. DNS should have four A records pointing to GitHub Pages IPs and a CNAME for `www`. HTTPS is provisioned automatically by GitHub via Let's Encrypt once DNS resolves.

## Built on

[astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) by Chris Williams — stripped down to a minimal portfolio with no blog, search, RSS, or OG image generation.
