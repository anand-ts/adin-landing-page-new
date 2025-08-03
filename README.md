# adin-landing

![adin_page](/public/adin_page.png)

## Project Summary

Landing page for ADIN platform. Built with Next.js and modern web technologies, featuring investor onboarding, member engagement, and founder resources.

Next.js + Tailwind

## Key Features

- **Multi-page Architecture** - Separate pages for investors, members, and founders
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components** - FAQ sections, stats displays, and CTA elements
- **Real-time Reports** - Live investment data visualization
- **Smooth Animations** - Framer Motion for component transitions

## Tech Stack

### **Frontend**
- **Next.js 15**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**

### **Development**
- **ESLint**
- **PostCSS**

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── founders/          # Founders page
│   ├── investors/         # Investors page
│   └── members/           # Members page
├── components/            # Reusable components
│   ├── founders/          # Founders-specific components
│   ├── hero/              # Hero section components
│   ├── investors/         # Investors-specific components
│   ├── layout/            # Layout components
│   ├── members/           # Members-specific components
│   ├── reports/           # Reports components
│   └── sections/          # Shared section components
├── lib/                   # Utilities and constants
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
public/                    # Static assets
├── adin_wordmark.svg      # Logo files
├── adin-logo-56x56.webp   # Favicon
└── ...                    # Other assets
```

## Usage

### **Getting Started**

1. **Clone the repository**
   ```bash
   git clone https://github.com/anand-ts/adin-landing-page-new.git
   cd adin-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```
