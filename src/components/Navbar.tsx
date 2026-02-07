import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  colorTheme: string;
  changeColorTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  toggleDarkMode,
  colorTheme,
  changeColorTheme 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleThemes = () => {
    setShowThemes(!showThemes);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { name: 'blue', color: '#2563eb' },
    { name: 'purple', color: '#7c3aed' },
    { name: 'green', color: '#059669' },
    { name: 'red', color: '#dc2626' },
    { name: 'orange', color: '#ea580c' },
    { name: 'pink', color: '#db2777' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    // { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between container-custom">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary-600 dark:text-primary-400"
        >
        Bj.dev
        </motion.a>

        <div className="items-center hidden space-x-8 md:flex">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="transition-colors text-dark-700 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
          
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="relative"
            >
              <button
                onClick={toggleThemes}
                className="p-2 transition-colors bg-gray-100 rounded-full dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600"
                aria-label="Change theme color"
              >
                <Palette size={20} />
              </button>
              
              {showThemes && (
                <div className="absolute right-0 flex gap-2 p-2 mt-2 bg-white rounded-lg shadow-lg dark:bg-dark-700">
                  {themes.map((theme) => (
                    <button
                      key={theme.name}
                      onClick={() => {
                        changeColorTheme(theme.name);
                        toggleThemes();
                      }}
                      className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
                        colorTheme === theme.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                      }`}
                      style={{ backgroundColor: theme.color }}
                      aria-label={`Switch to ${theme.name} theme`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={toggleDarkMode}
              className="p-2 transition-colors bg-gray-100 rounded-full dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={toggleThemes}
            className="p-2 bg-gray-100 rounded-full dark:bg-dark-700 text-dark-800 dark:text-white"
            aria-label="Change theme color"
          >
            <Palette size={20} />
          </button>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-100 rounded-full dark:bg-dark-700 text-dark-800 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 text-dark-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-white md:hidden dark:bg-dark-800"
      >
        <nav className="flex flex-col py-4 space-y-4 container-custom">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 transition-colors text-dark-700 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {showThemes && (
          <div className="flex flex-wrap gap-2 pb-4 container-custom">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => {
                  changeColorTheme(theme.name);
                  toggleThemes();
                }}
                className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                  colorTheme === theme.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                }`}
                style={{ backgroundColor: theme.color }}
                aria-label={`Switch to ${theme.name} theme`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;