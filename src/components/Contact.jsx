import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaThreads,
} from "react-icons/fa6";
import { SiSnapchat } from "react-icons/si";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.target);
    // Your Access Key is now correctly placed here
    data.append("access_key", "28f9cd6b-9042-4434-92b7-d84b441b2978");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "imadarakpabio@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=imadarakpabio@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+234-915-446-4229",
      href: "tel:+2349154464229",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Uyo, Akwa Ibom State, Nigeria",
      href: "https://maps.google.com/?q=Uyo,Akwa+Ibom",
    },
  ];

  const socials = [
    { icon: FiGithub, label: "GitHub", href: "https://github.com/imadara-oku" },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/imadaraoku",
    },
    {
      icon: FiTwitter,
      label: "Twitter",
      href: "https://twitter.com/imadaraoku",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/2349154464229",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/imadaraoku",
    },
    { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com/@imadaraoku" },
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://facebook.com/imadaraakpabio",
    },
    {
      icon: SiSnapchat,
      label: "Snapchat",
      href: "https://snapchat.com/add/imadara-oku",
    },
    {
      icon: FaThreads,
      label: "Threads",
      href: "https://threads.net/@imadaraoku",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-primary-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-800" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name" // IMPORTANT for Web3Forms
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-700/50 border border-navy-200 dark:border-navy-600 text-navy-900 dark:text-white placeholder-navy-400 dark:placeholder-navy-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" // IMPORTANT for Web3Forms
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-700/50 border border-navy-200 dark:border-navy-600 text-navy-900 dark:text-white placeholder-navy-400 dark:placeholder-navy-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message" // IMPORTANT for Web3Forms
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-navy-50 dark:bg-navy-700/50 border border-navy-200 dark:border-navy-600 text-navy-900 dark:text-white placeholder-navy-400 dark:placeholder-navy-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted || loading}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    submitted
                      ? "bg-emerald-500 text-white"
                      : "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40"
                  }`}
                >
                  {submitted ? (
                    <>
                      <FiCheck className="w-5 h-5" /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />{" "}
                      {loading ? "Sending..." : "Send Message"}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-400 dark:text-navy-500">
                        {info.label}
                      </p>
                      <p className="font-medium text-navy-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-navy-50 dark:bg-navy-700/30 border border-navy-100 dark:border-navy-700/50 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-navy-500 dark:text-navy-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                    <span className="text-xs text-navy-500 dark:text-navy-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
