<p align="center">
  <a href="https://riverofgodcanada.ericshuk.dev" target="_blank">
      <img width="20%" src="https://raw.githubusercontent.com/ericshuk/river-of-god-canada/refs/heads/main/public/icons/android/android-launchericon-192-192.png" alt="River of God Canada" />
      <h1 align="center">River of God Canada - Landing Page</h1>
    <p>A modern and responsive landing page for a church, built with cutting-edge web
technologies and clean code practices.</p>
  </a>
</p>

🔗 **Live Website:**
<a href="https://riverofgodcanada.ericshuk.dev" target="_blank">River of God
Canada</a>

## **Features**

✅ Built with **Next.js 15** for performance and scalability  
✅ **Tailwind CSS 3.4** for utility-first styling  
✅ **HeroUI (formerly NextUI)** for accessible and elegant UI components  
✅ **TypeScript 5** for type safety and maintainability  
✅ **Dark mode** support for improved user experience  
✅ **Atomic design methodology** for scalable component organization  
✅ **PWA (Progressive Web App)** support for offline access  
✅ **Husky, Commentlint, ESLint, and Prettier** for enforcing clean code and
consistency  
✅ **Conventional Commits** for structured and meaningful commit messages  
✅ **Comprehensive inline commentary** to improve readability and
maintainability

## **Tech Stack**

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 3.4, HeroUI
- **Type Safety:** TypeScript 5
- **Linting & Formatting:** ESLint, Prettier, Commentlint
- **Git Hooks:** Husky
- **Progressive Web App:** Service Worker, Web App Manifest
- **Commit Standards:** Conventional Commits

## **Getting Started**

### **Prerequisites**

Ensure you have Node.js (v18+) and Yarn installed.

### **Installation**

1. **Clone the repo:**

```sh
git clone https://github.com/your-username/river-of-god-canada.git
cd river-of-god-canada
```

1. **Install dependencies**

```sh
yarn install
```

1. **Run development server**

```sh
yarn dev
```

## Project Structure

Following Atomic Design Methodology, the folder structure is:

```
/src
 ├── /components (Reusable UI components)
 │ ├── /atoms (Smallest components like buttons, icons)
 │ ├── /molecules (Combinations of atoms, e.g., form fields)
 │ ├── /organisms (Complex UI sections)
 │ ├── /templates (Full-page structures)
 ├── /app (Next.js app dir)
 ├── /constants
 ├── /public (Static assets)
```

## Code Quality & Best Practices

This project follows strict clean code principles:

✅ Linting & Formatting – ESLint, Prettier, Commentlint  
✅ Pre-commit hooks – Husky  
✅ Strict TypeScript mode  
✅ Consistent code structure & reusable components  
✅ Commentlint – Enforces high-quality code comments  
✅ Conventional Commits – Maintains clear and structured commit history

## **Deployment**

Easily deploy to:

- **Vercel:**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Github Pages (Static export)**:
  ```sh
  yarn build
  yarn export
  ```

## **Contributing**

Contributions are welcome! Please follow the coding style and commit guidelines:

- **Follow Conventional Commits** (`feat:`, `fix:`, `chore:`, etc.)
- **Use Commentlint** to maintain high-quality inline documentation
- **Run ESLint & Prettier** before pushing code

## License

[MIT](https://choosealicense.com/licenses/mit/)
