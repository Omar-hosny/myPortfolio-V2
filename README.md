# Portfolio - Front-End Developer

A modern, premium portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Designed for front-end developers who want to showcase their work with a professional, high-quality web presence.

![Portfolio Preview](https://via.placeholder.com/1200x630/1a1a2e/e94560?text=Portfolio)

## Features

- **Modern Design** - Premium, Awwwards-quality aesthetic with glassmorphism effects
- **Dark/Light Mode** - System-preference aware theme toggle
- **Responsive** - Mobile-first design that looks great on all devices
- **Fast Performance** - Optimized with Next.js App Router
- **Animations** - Smooth scroll-based animations with Framer Motion
- **Accessible** - ARIA attributes and keyboard navigation support
- **SEO Optimized** - Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
myPortfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── not-found.tsx     # 404 page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScrollProgress.tsx
│   └── CommandMenu.tsx
├── data/
│   └── portfolio.ts      # Portfolio data
└── lib/
    └── utils.ts          # Utility functions
```

## Customization

### Update Personal Information

Edit `data/portfolio.ts` to update:
- Name, bio, headline
- Contact details
- Skills and tech stack
- Experience history
- Projects

### Theme Colors

Modify CSS variables in `app/globals.css`:
- `--primary`: Main accent color
- `--background`: Page background
- `--foreground`: Text color
- `--card`: Card background

## Sections

1. **Hero** - Animated introduction with gradient background
2. **About** - Professional summary with tech stack badges
3. **Projects** - Filterable project showcase (GitHub link when no projects)
4. **Skills** - Categorized skills with icons
5. **Experience** - Timeline of work history
6. **Contact** - Form with validation + social links

## Keyboard Shortcuts

- `Cmd/Ctrl + K` - Open command menu for quick navigation

## License

MIT License - Feel free to use this for your own portfolio!
