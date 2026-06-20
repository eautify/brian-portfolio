# Brian Balili Portfolio

Personal portfolio site built with Astro and deployed on Vercel.

## What This Project Is

This is a static Astro site split into reusable sections so it is easy to update later without editing one huge HTML file.

The site is currently organized around:

- a shared layout
- section-based components
- imported images in `src/assets`
- vendor CSS and legacy JS in `public`

## Tech Stack

- Astro
- HTML and CSS
- JavaScript for legacy interactions
- Vercel deployment

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
public/
  assets/            Resume PDF and other files served as-is
  css/               Vendor styles from the original template
  fonts/             Icon and Bootstrap fonts
  js/                Legacy JS used by the template
src/
  assets/images/     Images imported directly into Astro components
  components/        Reusable UI sections
  layouts/           Shared HTML shell and metadata
  pages/             Route entry points
  styles/            Global stylesheet imported by the layout
```

## Where to Edit Content

### Home page

Main page composition lives in:

- [src/pages/index.astro](src/pages/index.astro)

This file only assembles the sections. Most actual content lives in components.

### Shared layout

Global head tags, fonts, styles, and scripts live in:

- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)

Update this if you need to change:

- page title
- meta description
- Open Graph data
- global CSS or script imports

### Sections

Each section lives in its own file:

- [src/components/sections/About.astro](src/components/sections/About.astro)
- [src/components/sections/Skills.astro](src/components/sections/Skills.astro)
- [src/components/sections/Projects.astro](src/components/sections/Projects.astro)
- [src/components/sections/Experience.astro](src/components/sections/Experience.astro)
- [src/components/sections/Education.astro](src/components/sections/Education.astro)
- [src/components/sections/Footer.astro](src/components/sections/Footer.astro)

### Navigation and header

- [src/components/SiteHeader.astro](src/components/SiteHeader.astro)
- [src/components/PageNav.astro](src/components/PageNav.astro)

## Updating Content Later

### Change text

Edit the relevant section component directly.

Examples:

- About text in `About.astro`
- skill cards in `Skills.astro`
- project descriptions in `Projects.astro`
- work history in `Experience.astro`
- education details in `Education.astro`

### Replace images

Images used by Astro components are imported from:

- [src/assets/images](src/assets/images)

If you replace an image:

1. Put the new file in `src/assets/images`
2. Update the import in the component that uses it
3. Rebuild or refresh the dev server

### Update the resume

The resume is served from:

- [public/assets/Resume.pdf](public/assets/Resume.pdf)

Replace that file if you want to update the downloadable resume.

### Update styles

Global styling is in:

- [src/styles/global.css](src/styles/global.css)

This file still contains the old template styling plus the project-specific rules.

## Adding New Sections

If you want to add a new section later:

1. Create a new component in `src/components/sections`
2. Add the section to [src/pages/index.astro](src/pages/index.astro)
3. Add a matching nav link in [src/components/PageNav.astro](src/components/PageNav.astro) if needed

## Deployment

The site is set up for Vercel static deployment.

Typical flow:

1. Push changes to GitHub
2. Let Vercel detect the repository
3. Run `npm run build`
4. Deploy the generated static site

## Notes

- Images and global CSS are intentionally kept in `src/` so Astro can bundle them properly.
- Vendor CSS, fonts, and legacy JS remain in `public/` because they are loaded as static files.
- The project still uses some legacy template behavior, but the content structure is now Astro-native and easier to maintain.
