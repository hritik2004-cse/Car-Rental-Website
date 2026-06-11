# 🚗 Car Rental Website

A modern, full-featured **Car Rental Web Application** built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Browse, filter, and book rental vehicles with a sleek and responsive UI.

![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- 🏠 **Home Page** – Hero banner with a quick booking form, feature highlights, car showcase, and stats section
- 🚙 **Vehicles Page** – Browse all available rental cars with filtering options
- 📄 **Car Detail Page** – Detailed view of individual vehicles with specifications
- 📖 **About Page** – Company information and mission
- 📬 **Contact Page** – Get in touch form
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop
- ⚡ **Fast & Optimized** – Next.js Image optimization, lazy loading, and font optimization

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.7 | React Framework (App Router) |
| [React](https://react.dev/) | 19.2.4 | UI Library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first Styling |
| [Radix UI](https://www.radix-ui.com/) | 1.5.0 | Accessible UI Primitives |
| [shadcn/ui](https://ui.shadcn.com/) | 4.10.0 | Component Library |
| [Lucide React](https://lucide.dev/) | 1.17.0 | Icon Set |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.6.0 | Additional Icon Set |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional Class Names |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.6.0 | Tailwind Class Merging |

---

## 📁 Project Structure

```
carrent/
├── app/
│   ├── about/          # About page
│   ├── assets/         # Static assets & data files
│   │   └── Data/       # Car data, feature data, etc.
│   ├── components/     # Shared components (Nav, Footer, CarCard, etc.)
│   ├── contact/        # Contact page
│   ├── home/           # Home page components
│   ├── lib/            # Utility functions
│   ├── vehicles/       # Vehicles listing & detail pages
│   │   └── [slug]/     # Dynamic car detail route
│   ├── globals.css     # Global styles
│   ├── layout.js       # Root layout
│   └── page.js         # Home page
├── components/
│   └── ui/             # shadcn/ui components
├── public/             # Public static files
├── next.config.mjs     # Next.js configuration
├── tailwind.config     # Tailwind CSS configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn / pnpm / bun)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hritik2004-cse/Car-Rental-Website.git
   cd Car-Rental-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start the dev server with hot reload |
| Build | `npm run build` | Create an optimized production build |
| Start | `npm run start` | Start the production server |
| Lint | `npm run lint` | Run ESLint checks |

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with hero, features, and car listings |
| Vehicles | `/vehicles` | Browse all available rental cars |
| Car Detail | `/vehicles/[slug]` | Individual car specifications and booking |
| About | `/about` | About the company |
| Contact | `/contact` | Contact form |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Hritik** – [@hritik2004-cse](https://github.com/hritik2004-cse)

---

> Built with ❤️ using Next.js and Tailwind CSS
