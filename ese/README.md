# Ese Portfolio (React + Vite)

This is a personal portfolio web app built with React, Vite, Tailwind CSS, and i18n (English/Portuguese support).

## How to run the project locally

### 1) Prerequisites

- Node.js 18+ (recommended)
- npm

### 2) Install dependencies

From the project root (`ese/`):

- `npm install`

### 3) Start development server

- `npm run dev`

Then open the local URL shown in terminal (usually `http://localhost:5173`).

### 4) Build and preview production version (optional)

- `npm run build`
- `npm run preview`

Preview typically runs at `http://localhost:4173`.

## How to deploy / access online version

### Access online version

- If already deployed, open your Vercel domain (for example: `https://your-project-name.vercel.app`).

### Deploy on Vercel

1. Push your latest code to GitHub.
2. Import the repository in Vercel.
3. In project settings, use:
	- **Root Directory:** `ese`
	- **Framework Preset:** `Vite`
	- **Build Command:** `npm run build`
	- **Output Directory:** `dist`
	- **Install Command:** `npm install`
4. Deploy.

For extra deployment notes/troubleshooting, see `VERCEL_DEPLOYMENT.md`.

## Brief description of the projects presented

The portfolio showcases the following projects:

1. **Plataforma de Educação**
	- Student exchange platform.
	- Live: `https://www.rockstarstudyabroad.com/`

2. **Tech-blog**
	- Tech blog platform with authentication.
	- Live: `https://tech-blog-i77h.vercel.app/`

3. **Dotman Store**
	- E-commerce/task-focused web app experience.
	- Live: `https://dotman-s-store-3eax.vercel.app/`

4. **Berber&Blade**
	- Online barbershop store with booking system.
	- Live: `https://berber-shop-ruby.vercel.app/`

5. **Resturant Template**
	- Restaurant template project (backend still being developed in phases).
	- Live: `https://resturant-templete.vercel.app/`

6. **Budget Tracker**
	- Expense and budget tracking app.
	- Live: `https://budget-eight-bay.vercel.app/`

## Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run preview` – preview production build locally
- `npm run lint` – run lint checks
- `npm run format` – format files with Prettier
