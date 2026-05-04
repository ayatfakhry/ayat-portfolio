# Ayat Fakhry — Personal Portfolio

A professional, futuristic dark portfolio website for **Ayat Fakhry**, AI & Satellite Navigation Engineer.  
Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
ayat-portfolio/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with scroll detection
│   ├── Hero.jsx            # Animated hero with particle canvas & typewriter
│   ├── About.jsx           # Professional bio with trait cards
│   ├── Projects.jsx        # Interactive filterable project cards
│   ├── Skills.jsx          # Animated skill bars + certification grid
│   ├── Education.jsx       # Timeline-style education section
│   ├── Contact.jsx         # Contact form + social links
│   └── Footer.jsx          # Footer with links
├── hooks/
│   └── useInView.js        # Custom IntersectionObserver hook
├── pages/
│   ├── _app.jsx            # Global app wrapper + custom cursor
│   ├── _document.jsx       # HTML head with Google Fonts
│   └── index.jsx           # Main page
├── styles/
│   └── globals.css         # Global CSS, design tokens, animations
├── public/                 # Static assets (add your photo here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

---

## ✨ Features

- 🌌 **Futuristic dark design** with cyan/amber accent system
- 🎯 **Custom animated cursor** (dot + ring)
- 🌠 **Particle canvas** in hero section (WebGL-free, pure canvas)
- ⌨️ **Typewriter effect** cycling through job titles
- 🔢 **Animated skill bars** triggered on scroll
- 🗂️ **Filterable project cards** with expand-on-click detail
- 📅 **Alternating timeline** for education history
- 📱 **Fully responsive** (mobile-first)
- 🔠 **Google Fonts**: Syne (display) + JetBrains Mono + DM Sans
- 🎞️ **Framer Motion** for all transitions and scroll animations

---

## 🚀 Run Locally

### Prerequisites
- **Node.js 18+** (download from [nodejs.org](https://nodejs.org))
- **npm** or **yarn**

### Steps

```bash
# 1. Navigate into the project folder
cd ayat-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm start
```

---

## ☁️ Deploy on Vercel (Recommended — Free)

### Option A: Vercel CLI (fastest)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Inside the project folder, run:
vercel

# 3. Follow the prompts:
#    - Log in / create a Vercel account
#    - Link to a new project
#    - Accept default settings (Next.js auto-detected)

# 4. Your site will be live at:
#    → https://ayat-portfolio.vercel.app (or your custom domain)
```

### Option B: Deploy via GitHub (recommended for ongoing updates)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/ayat-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) → **Add New Project**
   - Import your GitHub repository
   - Vercel auto-detects Next.js — click **Deploy**

3. **Done!** Every `git push` to `main` will auto-deploy.

### Vercel Build Settings (auto-detected, no changes needed)
| Setting | Value |
|---|---|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

---

## 🔗 Add GitHub Links to Projects

In `components/Projects.jsx`, each project object has space for a `github` field.  
Update the placeholder links:

```js
// Find each project object and add:
{
  id: 'aeroguard',
  title: 'AeroGuard AI',
  github: 'https://github.com/ayat-fakhry/aeroguard-ai', // ← add your repo URL
  ...
}
```

Then in the card JSX, add a GitHub button:
```jsx
<a href={project.github} target="_blank" rel="noreferrer"
   className="text-xs font-mono text-cyan-400 hover:underline">
  View on GitHub →
</a>
```

---

## 🎨 Customization

### Colors
Edit CSS variables in `styles/globals.css`:
```css
:root {
  --cyan: #22d3ee;    /* Primary accent */
  --amber: #f59e0b;   /* Secondary accent */
  --void: #030508;    /* Background */
}
```

### Add Your Photo
1. Place your photo at `public/ayat.jpg`
2. Add to `Hero.jsx` or `About.jsx`:
```jsx
import Image from 'next/image';
<Image src="/ayat.jpg" alt="Ayat Fakhry" width={400} height={400} className="rounded-full" />
```

### Update Project GitHub Links
Edit the `PROJECTS` array in `components/Projects.jsx`.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 14.2.3 | React framework + SSR/SSG |
| `react` | ^18 | UI library |
| `react-dom` | ^18 | DOM renderer |
| `framer-motion` | ^11 | Animations & transitions |
| `lucide-react` | ^0.383.0 | Icon library |
| `clsx` | ^2.1.1 | Conditional class names |
| `tailwindcss` | ^3.4.1 | Utility-first CSS |
| `autoprefixer` | ^10 | CSS vendor prefixes |
| `postcss` | ^8 | CSS processing |

---

## 📄 License

Personal portfolio — All rights reserved © Ayat Fakhry 2025.
