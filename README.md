# 🎮 Game App / Hamza Ateek

Game App is a modern web application built with **React, Vite, and TailwindCSS**. It provides a seamless gaming experience, featuring game listings, details, and smooth navigation.

---

## Features

- **Fast & Optimized**: Built with Vite for blazing-fast performance.
- **Game Listings**: Displays a collection of games fetched via API from rawg io.
- **Game Details**: Provides in-depth information about each game.
- **Responsive UI**: Styled with TailwindCSS for a beautiful and consistent design.
- **Navigation**: Powered by `react-router-dom` for smooth page transitions.
- **State Management**: Uses `@tanstack/react-query` for efficient API data handling.
- **Interactive UI**: Includes SwiperJS for a dynamic game carousel.

---

## Technologies Used

- **React** (v18.3.1)
- **Vite** (v6.0.5)
- **TailwindCSS** (v3.4.17)
- **React Router** (v7.2.0)
- **TanStack React Query** (v4.28)
- **Axios** for API requests
- **SwiperJS** for carousels
- **ESLint** for code quality

---

## How I builed the project

\*\*I used:

- react frame work with vite in Front End.
- rawg io API from its website.
- React-dom library to navigate between pages smoothly.
- the Tailwind library to add formatting to the project while maintaining responsiveness to all devices.
- React-Query for fetch the datd from API.
- State Managment (Context-useReducer) for sharing the props during the project because Context and useReducer are natively supported in React, eliminating the need for third-party dependencies like Zustand. This reduces bundle size and keeps the project lightweight.
- I divided the project into components, pages, and hooks to make the code easier to work with.
- Upload the project in Vercel for share it to public.

---

# Project Structure

game-app/
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components
│ ├── hooks/ # Custom hooks
│ ├── assets/ # Images, styles.
│ ├── main.jsx # Entry point
│── package.json # Dependencies & scripts
│── tailwind.config.js # Tailwind configuration
│── vite.config.js # Vite configuration
│── README.md # Project documentation

---

## Installation & Setup

### 1- Clone the repository:

```sh
git clone https://github.com/HamzaAteek/Graduation_project.git
cd game-app
```

### 2- install npm

```sh
npm install
```

### 3- run the code

```sh
npm run dev
```

---

## Visit my web app in Vercel:

```sh
https://graduation-project-phi-murex.vercel.app/
```
