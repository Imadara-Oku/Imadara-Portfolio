import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-primary-500/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm md:text-base">
                IO
              </span>
            </div>
            <span className="text-navy-900 dark:text-white font-bold text-base md:text-lg hidden sm:block">
              Imadara <span className="gradient-text">Oku</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-primary-600 dark:text-primary-400"
                className="px-3 py-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-primary-50 dark:hover:bg-navy-800/50"
              >
                {link.name}
              </Link>
            ))}

            {/* Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-lg hover:bg-primary-50 dark:hover:bg-navy-800/50">
                Business
                <FiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${businessOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {businessOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 glass rounded-xl shadow-xl border border-primary-100 dark:border-navy-700/50 py-2 overflow-hidden"
                  >
                    <Link
                      to="mami"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 dark:text-navy-200 hover:bg-primary-50 dark:hover:bg-navy-700/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                    >
                      <span className="text-lg">👗</span>
                      <div>
                        <div className="font-semibold">MAMI Fashion</div>
                        <div className="text-xs text-navy-400 dark:text-navy-500">
                          Fashion & Accessories
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="tech-services"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 dark:text-navy-200 hover:bg-primary-50 dark:hover:bg-navy-700/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                    >
                      <span className="text-lg">💻</span>
                      <div>
                        <div className="font-semibold">Tech Services</div>
                        <div className="text-xs text-navy-400 dark:text-navy-500">
                          Web Development & Design
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Renamed Photos & Videos to Gallery */}
            <Link
              to="photos"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-primary-600 dark:text-primary-400"
              className="px-3 py-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-primary-50 dark:hover:bg-navy-800/50"
            >
              Gallery
            </Link>

            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-primary-600 dark:text-primary-400"
              className="px-3 py-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-primary-50 dark:hover:bg-navy-800/50"
            >
              Events
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                Available
              </span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-navy-300 hover:bg-primary-100 dark:hover:bg-navy-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? (
                  <FiSun className="w-4 h-4" />
                ) : (
                  <FiMoon className="w-4 h-4" />
                )}
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-navy-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-primary-100 dark:border-navy-700/50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              <div className="flex items-center gap-1.5 px-4 py-2 mb-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <HiOutlineSparkles className="w-3.5 h-3.5" />
                  Available for Projects
                </span>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-navy-700 dark:text-navy-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-navy-800/50 rounded-xl transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  onClick={() => setBusinessOpen(!businessOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-navy-700 dark:text-navy-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-navy-800/50 rounded-xl transition-colors"
                >
                  Business
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${businessOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {businessOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 overflow-hidden"
                    >
                      <Link
                        to="mami"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                      >
                        <span>👗</span> MAMI Fashion
                      </Link>
                      <Link
                        to="tech-services"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                      >
                        <span>💻</span> Tech Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Renamed Media to Gallery in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
              >
                <Link
                  to="photos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-navy-700 dark:text-navy-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-navy-800/50 rounded-xl transition-colors cursor-pointer"
                >
                  Gallery
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.05 }}
              >
                <Link
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-navy-700 dark:text-navy-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-navy-800/50 rounded-xl transition-colors cursor-pointer"
                >
                  Events
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
