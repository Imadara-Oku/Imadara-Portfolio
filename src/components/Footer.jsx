import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaThreads,
} from "react-icons/fa6";
import { SiSnapchat } from "react-icons/si";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      icon: FiGithub,
      href: "https://github.com/imadara-oku",
      label: "GitHub",
      hoverColor: "hover:bg-[#333]",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/imadaraoku",
      label: "LinkedIn",
      hoverColor: "hover:bg-[#0077b5]",
    },
    {
      icon: FiTwitter,
      href: "https://twitter.com/imadaraoku",
      label: "Twitter",
      hoverColor: "hover:bg-[#1DA1F2]",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/2349154464229",
      label: "WhatsApp",
      hoverColor: "hover:bg-[#25D366]",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/imadaraoku",
      label: "Instagram",
      hoverColor: "hover:bg-[#E4405F]",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@imadaraoku",
      label: "TikTok",
      hoverColor: "hover:bg-[#000000]",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/imadaraakpabio",
      label: "Facebook",
      hoverColor: "hover:bg-[#1877F2]",
    },
    {
      icon: SiSnapchat,
      href: "https://snapchat.com/add/imadara-oku",
      label: "Snapchat",
      hoverColor: "hover:bg-[#FFFC00] hover:text-black",
    },
    {
      icon: FaThreads,
      href: "https://threads.net/@imadaraoku",
      label: "Threads",
      hoverColor: "hover:bg-[#000000]",
    },
    {
      icon: FiMail,
      href: "mailto:imadarakpabio@gmail.com",
      label: "Email",
      hoverColor: "hover:bg-primary-600",
    },
  ];

  return (
    <footer className="relative bg-navy-900 dark:bg-navy-950 text-white overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Imadara Akpabio</h3>
                <p className="text-navy-400 text-xs">
                  Developer & Entrepreneur
                </p>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-4">
              Computer Engineering student, frontend developer, and entrepreneur
              creating impactful products through technology and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Business",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-navy-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - FIXED CLOSING DIV HERE */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-navy-400">
              <a
                href="mailto:imadarakpabio@gmail.com"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <span>📧</span> imadarakpabio@gmail.com
              </a>
              <a
                href="tel:+2349154464229"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <span>📞</span> +234-915-446-4229
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Uyo+Akwa+Ibom+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <span>📍</span> Uyo, Akwa Ibom State, Nigeria
              </a>
            </div>
          </div>
        </div>{" "}
        {/* This closing div for the grid was missing! */}
        {/* Divider & Bottom Section */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-navy-500 text-center md:text-left">
              © {new Date().getFullYear()} Imadara Oku Akpabio. All rights
              reserved.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className={`w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-navy-400 hover:text-white transition-all duration-300 ${social.hoverColor}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl shadow-primary-500/30 flex items-center justify-center z-40 hover:shadow-2xl hover:shadow-primary-500/50 transition-shadow"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
