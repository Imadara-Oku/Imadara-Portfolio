import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiX, FiAward } from "react-icons/fi";

const certifications = [
  {
    id: "mos-word",
    title: "Microsoft Office Specialist: Word",
    issuer: "Microsoft",
    date: "February 2024",
    icon: "📄",
    color: "from-blue-500 to-blue-700",
    description:
      "Microsoft Office Specialist certification in Microsoft Word, demonstrating proficiency in document creation, formatting, and advanced Word features.",
    credentialId: "Microsoft Certified",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Certification",
    issuer: "Professional Certification",
    date: "2025",
    icon: "🤖",
    color: "from-violet-500 to-purple-700",
    description:
      "Certification in Prompt Engineering, demonstrating expertise in crafting effective AI prompts, understanding language models, and optimizing AI interactions for various use cases.",
    credentialId: "Certified Prompt Engineer",
  },
  {
    id: "frontend-dev",
    title: "Frontend Web Development Certification",
    issuer: "Professional Certification",
    date: "2025",
    icon: "💻",
    color: "from-primary-500 to-cyan-600",
    description:
      "Comprehensive certification in frontend web development covering HTML, CSS, JavaScript, React.js, and modern web development practices. Demonstrated ability to build responsive, accessible, and performant web applications.",
    credentialId: "Certified Frontend Developer",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-white dark:from-navy-800 dark:to-navy-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and academic achievements that validate
            my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card overflow-hidden cursor-pointer group"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-navy-400 dark:text-navy-500 mb-4">
                  {cert.date}
                </p>

                <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                  <FiAward className="w-4 h-4" />
                  View Certificate
                  <FiExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-navy-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-primary-100 dark:border-navy-700"
            >
              <div
                className={`p-8 bg-gradient-to-br ${selectedCert.color} text-white relative`}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <span className="text-5xl mb-4 block">{selectedCert.icon}</span>
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <p className="text-white/80">{selectedCert.issuer}</p>
                <p className="text-white/60 text-sm">{selectedCert.date}</p>
              </div>
              <div className="p-8">
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                  {selectedCert.description}
                </p>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30 mb-6">
                  <FiAward className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-xs text-navy-400 dark:text-navy-500">
                      Credential
                    </p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                </div>
                {/* Certificate placeholder */}
                <div className="border-2 border-dashed border-navy-200 dark:border-navy-700 rounded-xl p-8 text-center">
                  <FiAward className="w-12 h-12 text-navy-300 dark:text-navy-600 mx-auto mb-3" />
                  <p className="text-sm text-navy-400 dark:text-navy-500">
                    Certificate Image
                  </p>
                  <p className="text-xs text-navy-300 dark:text-navy-600">
                    Upload your certificate here
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
