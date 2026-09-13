# 🧱 Dev Stack Builder

A modern, interactive web application for developers to explore, compare, and build their ideal technology stack for upcoming projects.

**Live Demo:** [https://mominofficial.github.io/dev-stack-builder/](https://mominofficial.github.io/dev-stack-builder/)  
**GitHub Repository:** [https://github.com/mominofficial/dev-stack-builder](https://github.com/mominofficial/dev-stack-builder)

---

## 📖 About The Project

**Dev Stack Builder** provides developers with a streamlined, visual workspace to discover modern frontend frameworks, backend runtimes, databases, languages, styling solutions, and DevOps tools. Users can pick technologies category by category, inspect ratings, difficulty levels, and badges, and curate a customized stack in real-time.

---

## 🛠️ Technologies Used

- **React.js** (v19) - Component-based user interface architecture
- **Tailwind CSS** (v4) - Modern utility-first styling with centralized brand gradient theme
- **Vite** - High-speed frontend build tool and development server
- **React-Toastify** - Interactive feedback and toast alert notifications
- **Lucide React** - Clean and accessible UI iconography
- **JSON Data** - Decoupled asynchronous technology dataset

---

## 🌟 Key Features

1. **Interactive Stack Builder with Duplicate Prevention**  
   Add frameworks and tools to your personal stack with a single click. The application automatically disables buttons for already selected tools and displays instant warning alerts if a duplicate addition is attempted.

2. **Real-Time Stack Management & Empty States**  
   A dedicated sidebar panel tracks your selected technologies dynamically. You can remove individual tools with the `✕` action button or clear the entire stack with a single click on "Remove All". Contextual empty states guide you when nothing is selected yet.

3. **Dynamic Category Filtering & Live Search**  
   Easily explore 15+ curated developer tools filtered by category (Frontend, Backend, Database, Language, Styling, DevOps, Tools) or search in real-time by keyword, name, or description.

---

## 💡 React Concepts & Questions

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like structure directly inside JavaScript code. It is used in React because it makes UI code visual, declarative, and easy to understand while retaining the full programming logic and power of JavaScript.

---

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. The child cannot modify its incoming props.
- **State:** Mutable data managed internally within a component that can change over time (such as user interactions or fetched data). When state updates, the component re-renders.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets functional components declare and maintain state variables. In this project, `useState` was used in `App.jsx` to manage:
- `stack`: The array of technologies selected by the user.
- `technologies`: The list of technologies fetched from the JSON file.
- `loading`: Boolean state controlling the loading skeleton and spinner.
- `selectedCategory`: The active category filter tab.
- `searchQuery`: The live text search input.
- `mobileMenuOpen`: Inside `Navbar.jsx` to toggle the responsive mobile navigation menu.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook allows functional components to perform side effects like fetching data, modifying the DOM, or setting timers. In this project, `useEffect` was needed to fetch `technologies.json` asynchronously when the component first mounts, preventing infinite re-rendering loops that would happen if data was fetched directly in the component body.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` prop to identify each element in a list uniquely. This allows React's reconciliation algorithm to quickly detect which items were added, updated, or removed, and re-render only those specific DOM nodes rather than rebuilding the entire list.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the practice of rendering different JSX elements depending on whether certain conditions or states are true or false.  
In this project, conditional rendering was used in `YourStack.jsx` to display an empty state when no items are selected, or the item list and "Remove All" button when items are present:
```jsx
{!hasItems ? (
  <div className="border border-dashed border-slate-200 rounded-2xl p-10 text-center">
    <p className="text-sm text-slate-400">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* List of selected technologies */}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed downwards as **props** (e.g., `<TechCard tech={tech} isAdded={isAdded} />`).
- **Child to Parent:** The parent passes a **callback function** as a prop (e.g., `<TechCard onAdd={handleAddToStack} />`). When the child triggers an event (like a button click), it invokes that function and sends data back up to the parent as an argument (e.g., `onAdd(tech)`).
