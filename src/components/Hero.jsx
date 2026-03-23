import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profileImg from "../assets/ima.png";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaThreads,
} from "react-icons/fa6";
import { SiSnapchat } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const roles = [
  "Frontend Web Developer",
  "Founder",
  "Programmer",
  "Entrepreneur",
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-navy-900 dark:via-navy-900 dark:to-primary-950" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-200/30 dark:bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-200/30 dark:bg-accent-500/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white leading-tight mb-4"
            >
              <span className="gradient-text">Imadara Oku</span>
              <br />
              <span className="gradient-text">Akpabio</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/80 dark:bg-navy-800/80 text-navy-600 dark:text-navy-300 border border-primary-100 dark:border-navy-700/50 shadow-sm"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-navy-500 dark:text-navy-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Computer Engineering student, fashion & tech entrepreneur, and
              founder of a unisex fashion brand, creating sophisticated web
              experiences driven by innovation, faith and elegance.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  View Projects <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center gap-2"
                >
                  Contact Me <FiMail className="w-4 h-4" />
                </motion.button>
              </Link>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2 border-accent-400 text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white"
              >
                <FiDownload className="w-4 h-4" /> Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-3"
            >
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/imadara-oku",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://linkedin.com/in/imadaraoku",
                  label: "LinkedIn",
                },
                {
                  icon: FiTwitter,
                  href: "https://twitter.com/imadaraoku",
                  label: "Twitter",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/2349154464229",
                  label: "WhatsApp",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com/imadaraoku",
                  label: "Instagram",
                },
                {
                  icon: FaTiktok,
                  href: "https://tiktok.com/@imadaraoku",
                  label: "TikTok",
                },
                {
                  icon: FaFacebookF,
                  href: "https://facebook.com/imadaraakpabio",
                  label: "Facebook",
                },
                {
                  icon: SiSnapchat,
                  href: "https://snapchat.com/add/imadara-oku",
                  label: "Snapchat",
                },
                {
                  icon: FaThreads,
                  href: "https://threads.net/@imadaraoku",
                  label: "Threads",
                },
                {
                  icon: FiMail,
                  href: "mailto:imadarakpabio@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.05 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-navy-800 border border-primary-100 dark:border-navy-700/50 flex items-center justify-center text-navy-500 dark:text-navy-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Spinning Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-300/40 dark:border-primary-600/30"
              />

              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-xl" />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-navy-800 shadow-2xl shadow-primary-500/20 bg-navy-100 dark:bg-navy-800 flex items-center justify-center"
              >
                {!imageError ? (
                  <img
                    src={profileImg} // Notice there are no quotes here
                    alt="Imadara Oku Akpabio"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback initials if image is missing */
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 dark:from-primary-900 dark:via-primary-800 dark:to-accent-900 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text">
                      IA
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Status Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl glass-card shadow-lg text-xs sm:text-sm font-semibold text-primary-700 dark:text-primary-300 border border-white/20"
              >
                🎓 Engineering Student
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-2 -left-2 px-4 py-2 rounded-xl glass-card shadow-lg text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400 border border-white/20"
              >
                👔 CEO, MAMI
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-navy-300 dark:border-navy-600 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-primary-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
