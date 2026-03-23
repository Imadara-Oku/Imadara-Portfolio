import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { FaReact, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "Financial Dashboard UI",
    description:
      "A modern, responsive financial dashboard with real-time data visualization, charts, and analytics. Built with clean design principles and intuitive user experience.",
    image: null,
    tech: ["React.js", "Tailwind CSS", "Chart.js", "JavaScript"],
    techIcons: [FaReact, SiTailwindcss, SiJavascript],
    github: "https://github.com/Imadara-Oku/Dashboard",
    live: "https://myfinance-dashboard.vercel.app/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Authentication System",
    description:
      "A complete authentication system with form validation, secure login/register, password recovery, and session management. Includes client-side and server-side validation.",
    image: null,
    tech: ["React.js", "JavaScript", "CSS", "Node.js"],
    techIcons: [FaReact, SiJavascript, FaCss3Alt],
    github: "#",
    live: "#",
    color: "from-primary-500 to-indigo-500",
  },
  {
    title: "TinyTusk Marketplace",
    description:
      "A full-featured e-commerce marketplace for fashion products. Includes product catalog, shopping cart, user profiles, and seamless checkout experience.",
    image: null,
    tech: ["React.js", "Tailwind CSS", "Firebase", "Stripe"],
    techIcons: [FaReact, SiTailwindcss, FaHtml5],
    github: "#",
    live: "#",
    color: "from-accent-500 to-pink-500",
  },
  {
    title: "Responsive Business Website",
    description:
      "A professionally designed, fully responsive business website with modern UI components, smooth animations, and optimized performance across all devices.",
    image: null,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    techIcons: [FaHtml5, FaCss3Alt, SiJavascript],
    github: "#",
    live: "#",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-white to-white dark:from-navy-800 dark:via-navy-900 dark:to-navy-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my web development projects, from dashboards to
            e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image/Preview */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex justify-center gap-3 mb-3">
                      {project.techIcons.map((Icon, idx) => (
                        <Icon key={idx} className="w-8 h-8 opacity-80" />
                      ))}
                    </div>
                    <p className="text-sm font-medium opacity-70">
                      Project Preview
                    </p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/imadara-oku"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Projects <FiArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
