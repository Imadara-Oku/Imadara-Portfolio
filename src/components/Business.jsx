import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function Business() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="business" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-white to-accent-50/20 dark:from-navy-800 dark:via-navy-900 dark:to-navy-800" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            Ventures
          </span>
          <h2 className="section-title">
            My Entrepreneurial <span className="gradient-text">Ventures</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I am an entrepreneur with diverse ventures in fashion and
            technology, blending creativity, innovation, and digital skills to
            create real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* MAMI Fashion */}
          <MAMISection isInView={isInView} />
          {/* Tech Services */}
          <TechSection isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

function MAMISection({ isInView }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      id="mami"
      className="glass-card overflow-hidden"
    >
      {/* Header */}
      <div className="relative p-8 bg-gradient-to-br from-accent-500 to-pink-600 text-white">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <span className="text-4xl mb-3 block">👗</span>
          <h3 className="text-2xl md:text-3xl font-bold">MAMI</h3>
          <p className="text-white/80 text-sm mt-1">
            Fashion & Accessories Brand
          </p>
          <p className="text-white/60 text-xs mt-1">
            Est. 2018 · Uyo, Akwa Ibom, Nigeria
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
          A fashion brand specializing in modest and elegant fashion for both
          female and male. With 7+ years of experience, MAMI offers corporate,
          casual, dinner, and modest wear, integrating technology into design
          processes for innovative styles.
        </p>

        {/* Offerings */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "Corporate Wear", emoji: "👔" },
            { label: "Casual Wear", emoji: "👕" },
            { label: "Dinner Wear", emoji: "🥂" },
            { label: "Modest Wear", emoji: "✨" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 p-3 rounded-xl bg-accent-50 dark:bg-accent-900/10 border border-accent-100 dark:border-accent-800/30"
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm font-medium text-navy-700 dark:text-navy-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h4 className="font-bold text-navy-900 dark:text-white mb-3">
          Key Achievements
        </h4>
        <ul className="space-y-2 mb-6">
          {[
            "Brand expansion across multiple markets",
            "Strong customer loyalty base",
            "Tech-integrated design innovation",
            "Strategic e-commerce growth",
          ].map((a) => (
            <li
              key={a}
              className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300"
            >
              <span className="text-accent-500 mt-0.5">✓</span> {a}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-center py-3 rounded-xl border border-accent-200 dark:border-accent-800/50 text-accent-600 dark:text-accent-400 font-medium hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors flex items-center justify-center gap-2"
        >
          {showDetails ? "Show Less" : "Learn More About MAMI"}
          <FiArrowRight
            className={`w-4 h-4 transition-transform ${showDetails ? "rotate-90" : ""}`}
          />
        </button>

        {/* Expanded Details */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 pt-6 border-t border-navy-100 dark:border-navy-700"
          >
            <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
              MAMI was founded with a vision to redefine modest fashion by
              combining elegance with modern design principles. As a fashion and
              Christian entrepreneur, I integrate Information and Communication
              Technology (ICT) into every aspect of the design and production
              process.
            </p>
            <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed mb-4">
              Our commitment to quality and innovation has led to significant
              brand expansion, with a growing customer base that values our
              unique approach to fashion. We leverage e-commerce platforms and
              digital marketing to reach customers across Nigeria and beyond.
            </p>
            <a
              href="#"
              className="btn-accent inline-flex items-center gap-2 text-sm"
            >
              Visit MAMI Website <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function TechSection({ isInView }) {
  const companies = [
    { name: "Harvoxx Tech Hub", role: "Tech Innovation", period: "2022" },
    {
      name: "Seal World Technologies",
      role: "Web Development Intern",
      period: "Jul–Sep 2023",
    },
    {
      name: "Dexter ICT Solutions",
      role: "IT Support Intern",
      period: "Aug–Sep 2022",
    },
    {
      name: "Start Innovation Hub",
      role: "Marketing & Strategy Intern",
      period: "Aug 2022",
    },
  ];

  const services = [
    {
      name: "Web Development",
      icon: "💻",
      desc: "Responsive, modern websites",
    },
    { name: "Frontend Design", icon: "🎨", desc: "Beautiful UI/UX interfaces" },
    {
      name: "Portfolio Creation",
      icon: "📋",
      desc: "Professional online presence",
    },
    {
      name: "Digital Solutions",
      icon: "🚀",
      desc: "End-to-end digital services",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      id="tech-services"
      className="glass-card overflow-hidden"
    >
      {/* Header */}
      <div className="relative p-8 bg-gradient-to-br from-primary-600 to-blue-700 text-white">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <span className="text-4xl mb-3 block">💻</span>
          <h3 className="text-2xl md:text-3xl font-bold">Tech Services</h3>
          <p className="text-white/80 text-sm mt-1">
            Web Development & Digital Solutions
          </p>
          <p className="text-white/60 text-xs mt-1">
            Based in Uyo, Akwa Ibom, Nigeria
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
          Offering professional web development, frontend design, and digital
          solutions. Leveraging modern technologies to build responsive,
          user-friendly, and performant websites for businesses and individuals.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-800/30"
            >
              <span className="text-xl mb-1 block">{s.icon}</span>
              <p className="text-sm font-semibold text-navy-900 dark:text-white">
                {s.name}
              </p>
              <p className="text-xs text-navy-500 dark:text-navy-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h4 className="font-bold text-navy-900 dark:text-white mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "React.js",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Bootstrap",
            "Node.js",
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Companies Worked With */}
        <h4 className="font-bold text-navy-900 dark:text-white mb-3">
          Experience From
        </h4>
        <div className="space-y-3">
          {companies.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between p-3 rounded-xl bg-navy-50 dark:bg-navy-700/30 border border-navy-100 dark:border-navy-700/50"
            >
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">
                  {c.name}
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-400">
                  {c.role}
                </p>
              </div>
              <span className="text-xs text-navy-400 dark:text-navy-500">
                {c.period}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="btn-primary inline-flex items-center gap-2 text-sm mt-6"
        >
          Hire Me <FiArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
