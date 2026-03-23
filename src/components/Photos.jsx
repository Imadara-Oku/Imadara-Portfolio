import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiImage, FiVideo, FiCamera } from "react-icons/fi";

const photos = [
  {
    id: 1,
    type: "photo",
    title: "MAMI Fashion Collection",
    category: "Fashion",
    gradient: "from-accent-400 to-pink-500",
  },
  {
    id: 2,
    type: "photo",
    title: "Tech Workshop",
    category: "Tech",
    gradient: "from-primary-400 to-blue-500",
  },
  {
    id: 3,
    type: "photo",
    title: "University Hackathon",
    category: "Events",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    type: "photo",
    title: "Campus Fellowship",
    category: "Events",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    id: 5,
    type: "photo",
    title: "Drama Club Performance",
    category: "Events",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: 6,
    type: "photo",
    title: "Web Development Projects",
    category: "Tech",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 7,
    type: "photo",
    title: "Corporate Fashion Shoot",
    category: "Fashion",
    gradient: "from-rose-400 to-red-500",
  },
  {
    id: 8,
    type: "photo",
    title: "Networking Event",
    category: "Events",
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    id: 9,
    type: "video",
    title: "Fashion Brand Promo",
    category: "Fashion",
    gradient: "from-pink-400 to-accent-500",
  },
];

const categories = ["All", "Fashion", "Tech", "Events"];

export default function Photos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="photos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/20 dark:from-navy-900 dark:to-navy-800" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="section-title">
            Photos & <span className="gradient-text">Videos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Moments from fashion shoots, tech events, and entrepreneurial
            journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white dark:bg-navy-800 text-navy-600 dark:text-navy-300 border border-navy-200 dark:border-navy-700"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              layout
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-square"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.gradient}`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                {photo.type === "video" ? (
                  <FiVideo className="w-10 h-10 mb-2 opacity-80 group-hover:scale-110 transition-transform" />
                ) : (
                  <FiCamera className="w-10 h-10 mb-2 opacity-80 group-hover:scale-110 transition-transform" />
                )}
                <p className="text-sm font-semibold text-center">
                  {photo.title}
                </p>
                <span className="text-xs opacity-70 mt-1">
                  {photo.category}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <FiImage className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-navy-400 dark:text-navy-500 mt-6"
        >
          More photos and videos coming soon...
        </motion.p>
      </div>
    </section>
  );
}
