import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiStar, FiBookOpen } from "react-icons/fi";

const educationData = [
  {
    id: "topfaith",
    institution: "Topfaith University",
    degree: "Bachelor of Engineering (B.Eng.) in Computer Engineering",
    period: "Sep 2021 – Present",
    status: "In View",
    gpa: "CGPA",
    icon: "🎓",
    color: "from-primary-500 to-blue-600",
    highlights: [
      "Academic Excellence",
      "Focus: Software Development, Programming, Technology Innovation",
      "Hackathon participations and achievements",
      "Capstone Projects in engineering and software development",
      "Founder, Topfaith University Campus Fellowship (2022)",
      "Founder, TU Drama Club (2022)",
      "Member, Eco Pulse Society",
      "5 years of university experience",
    ],
  },
  {
    id: "beulah",
    institution: "Beulah International School",
    degree: "Senior Secondary School Certificate",
    period: "Sep 2015 – May 2021",
    status: "Completed",
    icon: "📖",
    color: "from-accent-500 to-pink-600",
    highlights: [
      "Academic Excellence Award",
      "Labour Perfect",
      "Best Graduating Student in Science",
      "Strong foundation in sciences and technology",
    ],
  },
  {
    id: "word-of-faith",
    institution: "Word of Faith, Groups of Schools",
    degree: "First School Leaving Certificate",
    period: "July 2014",
    status: "Completed",
    icon: "✏️",
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Strong academic foundation",
      "Early interest in technology and learning",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A strong academic foundation in engineering and technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-emerald-300 dark:from-primary-700 dark:via-accent-700 dark:to-emerald-700 md:-translate-x-0.5" />

          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1.5 md:-translate-x-1.5 rounded-full bg-white dark:bg-navy-900 border-4 border-primary-400 dark:border-primary-500 z-10 shadow-lg shadow-primary-500/30" />

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass-card p-6 relative"
                >
                  {/* Period badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${edu.color} text-white mb-3`}
                  >
                    {edu.period}
                  </span>

                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="flex items-center gap-2 mb-3">
                      <FiStar className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                        {edu.gpa}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Status */}
                  <span
                    className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${
                      edu.status === "In View"
                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30"
                        : "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border border-primary-100 dark:border-primary-800/30"
                    }`}
                  >
                    {edu.status === "In View" ? "🔄 " : "✅ "}
                    {edu.status}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
