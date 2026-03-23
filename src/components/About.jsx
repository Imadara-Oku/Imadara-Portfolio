import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import profileImg from "../assets/myself.png";
import {
  FiCode,
  FiBriefcase,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCpu,
  FiHeart,
} from "react-icons/fi";

const stats = [
  {
    icon: FiCode,
    value: "5+",
    label: "Projects Built",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiBriefcase,
    value: "7+",
    label: "Years Entrepreneurship",
    color: "from-primary-500 to-blue-500",
  },
  {
    icon: FiTrendingUp,
    value: "4+",
    label: "Companies Worked",
    color: "from-accent-500 to-pink-500",
  },
  {
    icon: FiUsers,
    value: "3+",
    label: "Organizations Founded",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FiAward,
    value: "3+",
    label: "Certifications",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FiCpu,
    value: "10+",
    label: "Technologies",
    color: "from-violet-500 to-purple-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title">
            Get to Know <span className="gradient-text">Imadara Oku</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate Computer Engineering student, fashion & tech
            entrepreneur, and Christian creator crafting sophisticated
            experiences that blend innovation, faith, and elegance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-primary-100 dark:border-navy-700/50 shadow-xl bg-navy-100 dark:bg-navy-800">
                <div className="aspect-[4/5] flex items-center justify-center relative">
                  {!imageError ? (
                    <img
                      src={profileImg}
                      alt="Imadara Oku Akpabio"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-5xl font-bold text-white">
                          IA
                        </span>
                      </div>
                      <p className="text-navy-400 dark:text-navy-500 text-sm font-medium">
                        Profile Image
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-card p-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <FiAward className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900 dark:text-white">
                    Web developer
                  </p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">
                    Computer Engineering Student
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4">
              Akpabio, Imadara Oku
            </h3>
            <div className="space-y-4 text-navy-600 dark:text-navy-300 leading-relaxed">
              <p>
                I’m a Computer Engineering student at Topfaith University who
                believes that faith and technical skill reach their full
                potential when rooted in a clear purpose. For over four years,
                I’ve balanced the precision of engineering with entrepreneurship
                as the founder of a unisex fashion brand, MAMI.
              </p>
              <p>
                My work sits at the intersection of creativity and technology.
                As a frontend developer, I build responsive web experiences with
                a growing interest in cybersecurity. Beyond tech, I lead, create
                content, and contribute to communities like the TU Fellowship
                and the TU Drama Club.
              </p>
              <p>
                Whether designing for my brand, improving operations, creating
                content, or building digital products, I’m driven by excellence
                and creating solutions for lasting impact.
              </p>
            </div>

            {/* Role Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  title: "Frontend Developer",
                  sub: "React.js & Modern Web",
                  icon: <FiCode />,
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                },
                {
                  title: "Entrepreneur",
                  sub: "MAMI Founder & CEO",
                  icon: <FiBriefcase />,
                  color: "text-pink-400",
                  bg: "bg-pink-400/10",
                },
                {
                  title: "Christian Leader",
                  sub: "Fellowship Founder",
                  icon: <FiHeart />,
                  color: "text-purple-400",
                  bg: "bg-purple-400/10",
                },
                {
                  title: "Engineer",
                  sub: "Computer Engineering",
                  icon: <FiCpu />,
                  color: "text-emerald-400",
                  bg: "bg-emerald-400/10",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl 
                 /* Background Logic: Transparent to Solid White */
                 bg-transparent hover:bg-white 
                 dark:bg-navy-900/40 dark:hover:bg-navy-800/80 
                 /* BORDER FIX: Increased contrast from navy-100 to navy-200 */
                 border border-navy-200 dark:border-navy-700 
                 /* Interaction & Hover Effects */
                 flex flex-col items-start transition-all duration-300 ease-in-out 
                 hover:border-primary-500 hover:shadow-xl hover:-translate-y-1 cursor-default"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-navy-900 dark:text-white font-bold text-lg leading-tight transition-colors duration-300 group-hover:text-primary-500">
                      {item.title}
                    </h4>
                    <p className="text-navy-500 dark:text-navy-400 text-sm mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-4 md:p-5 text-center group cursor-default"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-navy-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
