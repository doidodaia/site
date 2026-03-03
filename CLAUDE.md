# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for **Moreira & Ponciano**, a law firm based in São Paulo, Brazil, specializing in Family Law and Social Security Law. The site is built with vanilla HTML, CSS, and JavaScript, using Bootstrap 5.3.3 for layout and components.

## Architecture

### Technology Stack

- **HTML5**: Semantic markup with Bootstrap classes
- **CSS3**: Custom CSS with CSS variables for theming
- **JavaScript (Vanilla)**: No framework, pure DOM manipulation
- **Bootstrap 5.3.3**: Grid system, components, and utilities (via CDN)
- **Bootstrap Icons 1.11.3**: Icon library (via CDN)
- **Google Fonts**: Cormorant Garamond (display) and DM Sans (body)

### Directory Structure

```
/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet with CSS variables
│   ├── js/
│   │   └── main.js            # Client-side functionality
│   └── img/                   # Images and logos
├── index.html                 # Homepage (main landing page)
└── _ARQUIVOS/                 # Ignored by git - working files
```

### Design System

The site uses a sophisticated color palette defined in CSS variables (`assets/css/style.css:1-23`):

- **Primary colors**: Dark teal/navy (`--primary: #1c2a2f`)
- **Accent colors**: Gold (`--accent: #c6a355`)
- **Typography**:
  - Display font: "Cormorant Garamond" (headings, elegant text)
  - Body font: "DM Sans" (readable, modern sans-serif)
- **Shadows**: Soft shadows for depth, gold shadows for accent elements

### Key Features

1. **Scroll-based interactions** (`assets/js/main.js:1-21`):
   - Navbar styling changes on scroll
   - WhatsApp floating button appears after 500px scroll
   - Back-to-top button visibility

2. **Intersection Observer animations** (`assets/js/main.js:23-36`):
   - Elements with `.reveal`, `.reveal-left`, `.reveal-right` classes fade in on scroll
   - Staggered animations with `.stagger-1`, `.stagger-2`, etc.

3. **Counter animations** (`assets/js/main.js:38-50`):
   - Stats section animates numbers on viewport entry

4. **Contact form** (index.html:477-521):
   - Form validation
   - LGPD compliance checkbox
   - Areas: Family Law, Social Security Law, Other

## Content Structure

The homepage (`index.html`) follows this section order:

1. Top bar (contact info, hidden on mobile)
2. Sticky navigation
3. Hero section with statistics
4. About section
5. Practice areas (Family Law & Social Security Law)
6. CTA section
7. Team section (2 lawyers)
8. Differentials section
9. Location section
10. Contact form
11. Footer
12. Floating elements (WhatsApp button, back-to-top)
13. Cookie banner

## Important Notes

- **Multi-page site**: Navigation references other pages (`sobre.html`, `atuacao.html`, `artigos.html`, `contato.html`) which don't exist yet in the repository
- **No build process**: Direct file editing, no compilation or bundling
- **CDN dependencies**: All external libraries loaded from CDN
- **Brazilian Portuguese**: All content is in pt-BR
- **WhatsApp integration**: Primary contact method is WhatsApp with pre-filled messages
- **Responsive design**: Mobile-first approach using Bootstrap breakpoints
- **SEO optimized**: Semantic HTML, meta tags, proper heading hierarchy

## Development Workflow

Since this is a static site with no build tools:

1. Edit HTML files directly
2. Modify `assets/css/style.css` for styling changes
3. Update `assets/js/main.js` for JavaScript functionality
4. Test by opening HTML files in a browser or using a local server
5. All external dependencies are loaded via CDN (no npm install needed)

## Contact Information

- **Phone/WhatsApp**: (11) 94461-7258
- **Email**: contato@moreiraeponciano.com.br
- **Address**: Av. Brigadeiro Faria Lima, 1811 - Sala 1119, São Paulo/SP
- **Lawyers**:
  - Lucas de Abreu Moreira (OAB/MG 171.253)
  - Larissa Fernanda Lopes Ponciano (OAB/MG 203.038)
