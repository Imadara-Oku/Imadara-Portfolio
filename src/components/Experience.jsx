import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiX, FiArrowRight, FiGlobe } from "react-icons/fi";
import { FaReact, FaPython, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const experiences = [
  {
    id: "mami",
    title: "Founder & CEO",
    company: "MAMI",
    period: "May 2018 – Present",
    type: "Fashion & Accessories",
    icon: "👗",
    color: "from-accent-500 to-pink-500",
    brief:
      "Founded and currently lead a fashion and accessories company specializing in both male and female wear with tech-integrated design processes.",
    fullDescription: [
      "Founded and currently lead a fashion and accessories company that specializes in both male and female wear.",
      "Integrated Information and Communication Technology (ICT) into the design processes.",
      "Innovated in fashion design and production using technology to create unique, trend-setting styles.",
      "Expanded the business through strategic marketing initiatives and effective utilization of e-commerce platforms.",
      "Led the design and production of high-quality fashion items, ensuring that customer satisfaction and brand reputation were maintained.",
      "Secured funding to enhance the company's growth and operational capabilities.",
      "Developed and implemented effective branding strategies that increased brand visibility and customer loyalty.",
      "Demonstrated strong leadership and vision in steering the brand to prominence within the competitive fashion industry.",
    ],
    website: "#",
    technologies: [
      "E-commerce",
      "Digital Marketing",
      "Fashion Design",
      "Brand Strategy",
      "ICT Integration",
    ],
    achievements: [
      "Brand expansion across multiple markets",
      "Strong customer loyalty base",
      "Innovative tech-integrated designs",
      "Strategic marketing growth",
    ],
  },
  {
    id: "campus-fellowship",
    title: "Founder",
    company: "Topfaith University Campus Fellowship",
    period: "2022 – Present",
    type: "Organization",
    icon: "✝️",
    color: "from-violet-500 to-purple-500",
    brief:
      "Founded the Campus Fellowship at Topfaith University, creating a spiritual community for students.",
    fullDescription: [
      "Founded and established the Topfaith University Campus Fellowship from the ground up.",
      "Built a vibrant spiritual community for students on campus.",
      "Organized regular fellowship meetings, Bible study sessions, and spiritual development programs.",
      "Developed leadership structures and mentored student leaders within the fellowship.",
      "Created a welcoming and inclusive environment for students from diverse backgrounds.",
      "Led strategic planning for fellowship events, retreats, and community outreach programs.",
    ],
    technologies: [
      "Leadership",
      "Community Building",
      "Event Planning",
      "Mentorship",
      "Public Speaking",
    ],
    achievements: [
      "Established a thriving campus community",
      "Mentored numerous student leaders",
      "Organized impactful events and retreats",
    ],
  },
  {
    id: "drama-club",
    title: "Founder",
    company: "TU Drama Club",
    period: "2022 – Present",
    type: "Creative Arts",
    icon: "🎭",
    color: "from-amber-500 to-orange-500",
    brief:
      "Founded the Drama Club at Topfaith University, promoting creative arts and performing arts among students.",
    fullDescription: [
      "Founded the Topfaith University Drama Club to promote creative arts and performing arts.",
      "Directed and produced stage plays, skits, and theatrical performances.",
      "Recruited and trained talented students in acting, scriptwriting, and stage management.",
      "Organized drama workshops and masterclasses for skill development.",
      "Represented the university in inter-school drama competitions and cultural events.",
      "Collaborated with other student organizations for joint creative projects.",
    ],
    technologies: [
      "Creative Direction",
      "Scriptwriting",
      "Stage Management",
      "Team Building",
      "Event Production",
    ],
    achievements: [
      "Produced multiple successful stage plays",
      "Built a strong team of creative students",
      "Represented university in competitions",
    ],
  },
  {
    id: "harvoxx",
    title: "Intern",
    company: "Harvoxx Tech Hub",
    period: "March 2025 – Sep 2025",
    type: "Web Development",
    icon: "🌐",
    color: "from-primary-500 to-blue-500",
    brief:
      "Gained hands-on experience in web development and frontend technologies.",
    fullDescription: [
      "Acquired knowledge in web design and development, specializing in frontend development.",
      "Participated in intensive web development training programs.",
      "Collaborated on team-based coding projects.",
      "Built responsive web applications using modern frameworks.",
      "Participated in code reviews and pair programming sessions.",
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, ReactJS, and Bootstrap.",
      "Utilized Git and GitHub to manage and push projects to repositories.",
      "Hosted and deployed websites using platforms like Netlify and Vercel, optimizing performance and accessibility for end users.",
      "Contributed to frontend development projects, enhancing user experience and interface design.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Git",
      "GitHub",
      "Netlify",
      "Vercel",
    ],
    achievements: [
      "Built and deployed multiple websites",
      "Enhanced web development skills through practical training",
      "Gained experience in collaborative development workflows",
      "Built multiple web projects during the program",
    ],
  },
  {
    id: "seal-world",
    title: "Intern",
    company: "Seal World Technologies",
    period: "July 2023 – Sep 2023",
    type: "Web Development",
    icon: "🌐",
    color: "from-primary-500 to-blue-500",
    brief:
      "Gained hands-on experience in web development, WordPress, SEO, and frontend technologies.",
    fullDescription: [
      "Created and published a blog using WordPress, focusing on content that attracts and engages target audiences.",
      "Acquired knowledge in monetizing WordPress blog through Search Engine Optimization (SEO) and Pay Per Click (PPC) advertising, significantly improving the blog's visibility and revenue potential.",
      "Utilized Canva to design visually appealing and professional-grade images, enhancing the blog's aesthetic and user engagement.",
      "Acquired knowledge in web design and development, specializing in frontend development.",
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, ReactJS, and Bootstrap.",
      "Utilized Git and GitHub to manage and push projects to repositories.",
      "Hosted and deployed websites using platforms like Netlify and Vercel, optimizing performance and accessibility for end users.",
      "Contributed to frontend development projects, enhancing user experience and interface design.",
    ],
    technologies: [
      "WordPress",
      "SEO",
      "PPC",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git",
      "GitHub",
      "Netlify",
      "Vercel",
      "Canva",
    ],
    achievements: [
      "Built and deployed multiple websites",
      "Improved blog SEO rankings",
      "Designed professional marketing materials",
    ],
  },
  {
    id: "dexter-ict",
    title: "Intern",
    company: "Dexter ICT Solutions",
    period: "Aug 2022 – Sep 2022",
    type: "IT Support & Engineering",
    icon: "🔧",
    color: "from-emerald-500 to-teal-500",
    brief:
      "Delivered exceptional customer support, hardware repairs, and software installations.",
    fullDescription: [
      "Delivered exceptional customer support by addressing inquiries and resolving issues, maintaining high levels of client satisfaction.",
      "Provided additional customer care services, ensuring a seamless and satisfactory experience for all clients.",
      "Installed and licensed various software packages, including Adobe, Autodesk, Microsoft, and game packages, ensuring compliance and optimal performance.",
      "Conducted component-level repairs and maintenance on laptops, restoring functionality for clients.",
      "Utilized diagnostic tools like multimeters, oscilloscopes, and BGA machines to identify and resolve hardware issues.",
      "Repaired and replaced CPUs, hard drives, RAM, keyboards, and screens, improving device longevity and user satisfaction.",
      "Acted as the first point of contact for customers, providing information and directing inquiries to the appropriate departments, enhancing customer experience.",
    ],
    technologies: [
      "Hardware Repair",
      "Software Installation",
      "Diagnostic Tools",
      "Customer Support",
      "Multimeter",
      "Oscilloscope",
      "BGA Machine",
    ],
    achievements: [
      "Resolved numerous hardware issues",
      "Maintained high client satisfaction",
      "Gained expertise in diagnostic tools",
    ],
  },
  {
    id: "start-innovation",
    title: "Intern",
    company: "Start Innovation Hub",
    period: "Aug 2022",
    type: "Marketing & Innovation",
    icon: "💡",
    color: "from-rose-500 to-red-500",
    brief:
      "Collaborated on tech projects, executed marketing campaigns, and conducted market research.",
    fullDescription: [
      "Collaborated on tech projects focused on solving real-world challenges, contributing to innovative solutions that drive business success.",
      "Advertised for the company by developing and executing strategic marketing campaigns that significantly increased brand awareness and customer engagement.",
      "Designed and implemented creative marketing materials and presentations aimed at attracting new customers and retaining existing ones, resulting in a measurable increase in customer acquisition.",
      "Conducted in-depth market research to identify trends and opportunities, which informed the strategic direction of the company's promotional efforts.",
      "Presented strategic customer acquisition plans to stakeholders, demonstrating a clear understanding of market dynamics and effective customer engagement strategies.",
    ],
    technologies: [
      "Marketing Strategy",
      "Market Research",
      "Campaign Design",
      "Stakeholder Management",
      "Customer Acquisition",
    ],
    achievements: [
      "Increased brand awareness significantly",
      "Developed strategic marketing campaigns",
      "Presented plans to key stakeholders",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/30 dark:from-navy-900 dark:to-navy-800" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From fashion entrepreneurship to tech internships — a diverse
            professional journey.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              onClick={() => setSelectedExp(exp)}
              className="glass-card p-6 md:p-8 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-navy-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-navy-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-navy-500 dark:text-navy-400 mt-2 leading-relaxed">
                    {exp.brief}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/30"
                      >
                        {t}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-md bg-navy-50 dark:bg-navy-700/50 text-navy-500 dark:text-navy-400">
                        +{exp.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <FiArrowRight className="w-5 h-5 text-navy-400 dark:text-navy-500 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-navy-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-primary-100 dark:border-navy-700"
            >
              {/* Header */}
              <div
                className={`p-8 bg-gradient-to-br ${selectedExp.color} rounded-t-2xl relative`}
              >
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                    {selectedExp.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{selectedExp.title}</h3>
                    <p className="text-white/80">{selectedExp.company}</p>
                    <p className="text-white/60 text-sm">
                      {selectedExp.period}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <h4 className="font-bold text-navy-900 dark:text-white mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 mb-6">
                  {selectedExp.fullDescription.map((desc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <h4 className="font-bold text-navy-900 dark:text-white mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedExp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                {selectedExp.achievements && (
                  <>
                    <h4 className="font-bold text-navy-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedExp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300"
                        >
                          <span className="text-emerald-500">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Website Link */}
                {selectedExp.website && selectedExp.website !== "#" && (
                  <a
                    href={selectedExp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 mt-6"
                  >
                    <FiGlobe className="w-4 h-4" /> Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
