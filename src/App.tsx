import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";



function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [colorTheme, setColorTheme] = useState("blue"); // Default theme

  useEffect(() => {
    // Check user preferences
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)) 
    {
      setDarkMode(true);
    }

    // Load saved color theme
    const savedColorTheme = localStorage.getItem("colorTheme");
    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
      document.documentElement.setAttribute("data-theme", savedColorTheme);
    }

    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } 
    else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeColorTheme = (theme: string) => {
    setColorTheme(theme);
    localStorage.setItem("colorTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        colorTheme={colorTheme}
        changeColorTheme={changeColorTheme}
      />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
