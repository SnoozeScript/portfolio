import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  MapPin,
  Mail,
  ExternalLink,
  Twitter,
  Sun,
  Moon,
  ArrowUp,
  GraduationCap,
  FileCode,
  Award,
} from "lucide-react";

const CONFIG = {
  name: "Aadil Inamdar",
  title: "404: Motivation not found. Napping instead.",
  tagline: "Building intelligent systems and web experiences",
  location: "Kolhapur, Maharashtra, India",
  email: "contact@aadilinamdar27.me",
  about: "Student passionate about AI, machine learning, and web development. Eager to learn and contribute to innovative projects while expanding my technical skills.",
  socialLinks: [
    {
      Icon: Linkedin,
      link: "https://linkedin.com/in/aa",
      label: "LinkedIn",
    },
    {
      Icon: Github,
      link: "https://github.com/snoozescript",
      label: "GitHub",
    },
    {
      Icon: Twitter,
      link: "https://twitter.com/snoozescript",
      label: "Twitter",
    },
    {
      Icon: FileCode,
      link: "https://dochub.aadilinamdar27.me",
      label: "Docs",
    },
  ],
  skills: [
    "JavaScript", "Python", "React.js",
    "Node.js", "TensorFlow", "Tailwind CSS",
    "Firebase", "MongoDB", "Git"
  ],
  // experience: [
  //   {
  //     company: "Synfuse",
  //     role: "Freelance Developer",
  //     duration: "Jan 2023 - Present",
  //     highlights: [
  //       "Built full-stack applications for clients",
  //       "Implemented automated deployment pipelines",
  //       "Optimized application performance"
  //     ],
  //   },
  // ],
  education: [
    {
      institution: "Sanjay Ghodawat University",
      degree: "B.Tech in AI & Machine Learning",
      duration: "2023 - 2026",
      achievements: [
        "Currently pursuing B.Tech degree in AI & ML",
        "Active member of the Microsoft LearnStudent Club",
        "Organizer of Cubicles Initiative",
      ],
    },
    {
      institution: "Dr. D. Y. Patil Polytechnic",
      degree: "Diploma in Computer Engineering",
      duration: "2021 - 2023",
      achievements: [
        "Graduated with Distinction",
        "Gained Experience in Languages like C, C++, Java, and Python",
      ],
    },
    {
      institution: "Chate School & Junior College",
      degree: "Higher Secondary Education",
      duration: "2019 - 2021",
      achievements: [
        "Science Stream",
        "Completed with Distinction",
      ],
    },
  ],
  projects: [
    {
      name: "Chat Assistant",
      description:
        " An AI-powered chat assistant built with Streamlit, LangChain, and Groq. Choose from multiple LLMs for fast, intelligent, and customizable conversations.",
      tech: ["Python", "GroqCloud API", "Streamlit", "LangChain"],
      link: "https://snoozescript-chat.streamlit.app",
    },
    {
      name: "OtakuHaven",
      description:
        "Entertainment platform for anime and movies with personalized recommendations and watchlists.",
      tech: ["React", "TMDB API", "Firebase"],
      link: "https://otaku-haven-alpha.vercel.app",
    },
    {
      name: "Text2Vox",
      description:
        "Text-to-speech application using HuggingFace models to generate natural audio with customizable voices and parameters.",
      tech: ["React", "HuggingFace API", "Web Audio"],
      link: "https://text2-vox.vercel.app",
    }

  ],
  certifications: [
    {
      name: "Google Cloud Fundamentals",
      issuer: "Google Cloud",
      date: "2023",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
    },
  ],
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <span className="font-medium">💤{CONFIG.name.split(" ")[0]}</span>
            </motion.div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-gray-700" size={20} />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {CONFIG.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              {CONFIG.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {CONFIG.about}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon size={18} />
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span>{CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail size={16} />
                <a href={`mailto:${CONFIG.email}`} className="hover:underline">
                  {CONFIG.email}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {CONFIG.skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section
        <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {CONFIG.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>
                <ul className="space-y-2 pl-5">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="relative text-gray-600 dark:text-gray-300 before:absolute before:left-[-1rem] before:content-['•'] before:text-blue-600 dark:before:text-blue-400">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Education Timeline */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3"
          >
            <GraduationCap className="text-blue-600 dark:text-blue-400" />
            Education
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

            <div className="space-y-8 pl-12">
              {CONFIG.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-11 top-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-950"></div>

                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {edu.institution} • {edu.duration}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <Award className="text-yellow-500 mt-0.5 flex-shrink-0" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {CONFIG.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <div className="text-5xl font-bold text-gray-300 dark:text-gray-600">
                    {project.name[0]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">💤{CONFIG.name}</span>
            </div>

            <div className="flex gap-6">
              {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
          </div>
        </footer>

        {/* Back to Top Button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default App;