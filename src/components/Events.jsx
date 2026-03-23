import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiMapPin, FiClock } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "University Hackathon",
    date: "2024",
    location: "Topfaith University",
    time: "Annual",
    description:
      "Participated in the university hackathon, building innovative solutions with a team. Focused on software development and technology innovation.",
    category: "Tech",
    color: "from-primary-500 to-blue-600",
    icon: "💻",
  },
  {
    id: 2,
    title: "MAMI Fashion Showcase",
    date: "2024",
    location: "Uyo, Akwa Ibom",
    time: "Annual",
    description:
      "Organized and showcased the latest MAMI fashion collection, featuring tech-integrated designs for both male and female wear.",
    category: "Fashion",
    color: "from-accent-500 to-pink-600",
    icon: "👗",
  },
  {
    id: 3,
    title: "Campus Fellowship Retreat",
    date: "2023",
    location: "Topfaith University",
    time: "Annual",
    description:
      "Led the Campus Fellowship annual retreat, organizing spiritual development programs and team-building activities for students.",
    category: "Spiritual",
    color: "from-violet-500 to-purple-600",
    icon: "✝️",
  },
  {
    id: 4,
    title: "TU Drama Club Production",
    date: "2023",
    location: "Topfaith University",
    time: "Bi-annual",
    description:
      "Directed and produced a major theatrical production by the TU Drama Club, showcasing student talent in acting, scriptwriting, and stage management.",
    category: "Creative Arts",
    color: "from-amber-500 to-orange-600",
    icon: "🎭",
  },
  {
    id: 5,
    title: "Tech Innovation Workshop",
    date: "2023",
    location: "Start Innovation Hub, Uyo",
    time: "Special Event",
    description:
      "Participated in technology innovation workshops focused on solving real-world challenges through software and hardware solutions.",
    category: "Tech",
    color: "from-emerald-500 to-teal-600",
    icon: "💡",
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    date: "2023",
    location: "Seal World Technologies",
    time: "3 Months",
    description:
      "Completed an intensive web development bootcamp, gaining hands-on experience with React.js, Tailwind CSS, and modern web technologies.",
    category: "Tech",
    color: "from-cyan-500 to-blue-600",
    icon: "🚀",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 via-white to-white dark:from-navy-800 dark:via-navy-900 dark:to-navy-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Schedule
          </span>
          <h2 className="section-title">
            Events & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Key events, achievements, and milestones from my academic and
            entrepreneurial journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card overflow-hidden group"
            >
              {/* Top gradient */}
              <div className={`h-1.5 bg-gradient-to-r ${event.color}`} />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-navy-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 mt-1">
                      {event.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-navy-500 dark:text-navy-400 leading-relaxed mt-3">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-navy-100 dark:border-navy-700/50">
                  <div className="flex items-center gap-1.5 text-xs text-navy-400 dark:text-navy-500">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy-400 dark:text-navy-500">
                    <FiMapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy-400 dark:text-navy-500">
                    <FiClock className="w-3.5 h-3.5" />
                    {event.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
