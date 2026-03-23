import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiAutocad,
  SiNetlify,
  SiVercel,
  SiReact,
  SiCanva,
} from "react-icons/si";
import {
  FiLayout,
  FiMonitor,
  FiDatabase,
  FiCode,
  FiCpu,
  FiStar,
} from "react-icons/fi";

const technicalSkills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
  { name: "React.js", icon: FaReact, color: "#61DAFB", level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
  { name: "Python", icon: FaPython, color: "#3776AB", level: 75 },
  { name: "C++", icon: SiCplusplus, color: "#00599C", level: 70 },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 85 },
  { name: "Cybersecurity", icon: FaShieldAlt, color: "#10B981", level: 65 },
];

const tools = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "VS Code", icon: FiCode, color: "#007ACC" },
  { name: "MATLAB", icon: FiCpu, color: "#0076A8" },
  { name: "Simulink", icon: FiDatabase, color: "#3B82F6" },
  { name: "AutoCAD", icon: SiAutocad, color: "#C42032" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

const softSkills = [
  { name: "Leadership", icon: "👑", desc: "Leading teams with vision" },
  { name: "Communication", icon: "💬", desc: "Clear & effective messaging" },
  {
    name: "Project Management",
    icon: "📋",
    desc: "Organized & strategic planning",
  },
  { name: "Strategic Planning", icon: "🎯", desc: "Goal-oriented execution" },
  { name: "Team Collaboration", icon: "🤝", desc: "Cross-functional teamwork" },
  { name: "Entrepreneurship", icon: "🚀", desc: "Business building & growth" },
  { name: "Problem Solving", icon: "🧩", desc: "Creative analytical thinking" },
  { name: "Time Management", icon: "⏰", desc: "Efficient & productive" },
];

const categories = [
  { key: "technical", label: "Technical Skills", icon: FiCode },
  { key: "tools", label: "Tools & Platforms", icon: FiMonitor },
  { key: "soft", label: "Soft Skills", icon: FiLayout },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("technical");

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/30 dark:from-navy-900 dark:to-navy-800" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A diverse skill set spanning technical development, tools, and
            leadership capabilities.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white dark:bg-navy-800 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-700 hover:border-primary-300 dark:hover:border-primary-600"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Technical Skills */}
        {active === "technical" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card p-5 group cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: skill.color + "15" }}
                    >
                      <skill.icon
                        className="w-5 h-5"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="font-semibold text-navy-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tools */}
        {active === "tools" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: tool.color + "15" }}
                >
                  <tool.icon
                    className="w-7 h-7"
                    style={{
                      color: tool.color === "#000000" ? "#64748b" : tool.color,
                    }}
                  />
                </motion.div>
                <p className="font-medium text-sm text-navy-900 dark:text-white">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Soft Skills */}
        {active === "soft" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 text-center group cursor-default"
              >
                <motion.span
                  whileHover={{ scale: 1.3 }}
                  className="text-3xl block mb-2"
                >
                  {skill.icon}
                </motion.span>
                <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                  {skill.name}
                </h4>
                <p className="text-xs text-navy-500 dark:text-navy-400">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
