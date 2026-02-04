# PlateUp - Landing Page

Welcome to the landing page for **PlateUp**, an application designed to simplify your meal planning. This landing page is built with [Astro](https://astro.build) to provide a fast and responsive experience.

## 📱 About PlateUp

PlateUp helps you discover recipes, organize your week, and eat better. It's your perfect meal plan companion.

### Key Features

- **📅 Weekly Planning:** Organize your meals for the week in minutes. No more wondering "what's for dinner?".
- **🍲 Delicious Recipes:** Access a collection of healthy and easy-to-make recipes.
- **🛒 Shopping List:** Automatically generate your shopping list based on your plan.

## 🚀 Project Structure

This project uses Astro to generate a static landing page for the application. The structure is as follows:

```text
/
├── public/
│   ├── app-release.apk  # Android Application Package
│   ├── preview-app.jpeg # App preview image
│   └── ...
├── src/
│   ├── layouts/
│   │   └── Layout.astro # Main HTML layout
│   ├── pages/
│   │   └── index.astro  # Landing page content
│   └── styles/
│       └── global.css   # Global styles
└── package.json
```

## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📥 Download

The landing page includes a direct download link for the Android version of the app (`.apk`).

Developed by *Jorge Linares*