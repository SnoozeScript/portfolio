import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Linkedin,
  Github,
  MapPin,
  Mail,
  ExternalLink,
  Twitter,
  Bot,
  Sun,
  Moon,
  ArrowUp,
  GraduationCap,
  FileCode,
} from "lucide-react";

// Centralized configuration
const CONFIG = {
  name: "Aadil Inamdar",
  tagline:
    "Quick learner | Passionate about technology | Web Developer | Machine Learning | Games",
  location: "Kolhapur, Maharashtra, India",
  email: "contact@aadilinamdar27.me",
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
    {
      name: "Web Development",
      Icon: Code,
      description:
        "Crafting responsive and performant web applications using modern technologies.",
    },
    {
      name: "UI/UX Design",
      Icon: Palette,
      description:
        "Designing intuitive and visually appealing user interfaces.",
    },
    {
      name: "Machine Learning",
      Icon: Bot,
      description: "Building intelligent systems using data-driven models.",
    },
  ],
  experience: [
    {
      company: "Microsoft Learn Student's Club - SGU",
      role: "Technical Lead",
      duration: "Oct 2024 - Present",
      description:
        "Leading a team to build innovative projects and conduct workshops.",
    },
    {
      company: "Synfuse",
      role: "Freelance Developer",
      duration: "Jan 2023 - Present",
      description:
        "Developing web applications and websites for clients across the globe.",
    },
  ],
  education: [
    {
      institution: "Sanjay Ghodawat University",
      degree:
        "Bachelor of Technology in Artificial Intelligence & Machine Learning",
      duration: "2023 - 2026",
      description:
        "Pursuing a degree in artificial intelligence and machine learning.",
    },
    {
      institution: "Dr. D. Y. Patil Polytechnic, Kasaba Bawada",
      degree: "Diploma in Computer Engineering",
      duration: "2021 - 2023",
      description:
        "Completed a diploma in computer engineering with distinction.",
    },
    {
      institution: "Chate School & Junior College Of Science",
      degree: "Higher Secondary Education",
      duration: "2019 - 2021",
      description:
        "Completed higher secondary education with a focus on science.",
    },
  ],
  projects: [
    {
      name: "Text2Vox",
      description:
        "A text-to-speech web application that converts text into natural-sounding audio.",
      tech: ["React", "huggingface", "text-to-speech"],
      link: "https://text2-vox.vercel.app",
    },
    {
      name: "OtakuHaven",
      description:
        "A platform aggregating anime, movies, and TV shows for a seamless entertainment experience.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://otaku-haven-alpha.vercel.app",
    },
    {
      name: "Portfolio Website",
      description:
        "Interactive personal portfolio showcasing skills, projects, and professional journey.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      link: "https://aadilinamdar27.me",
    },
  ],
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Show/hide "Back to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-blue-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50"
        >
          {darkMode ? (
            <Sun size={24} className="text-yellow-400" />
          ) : (
            <Moon size={24} className="text-gray-800" />
          )}
        </button>

        {/* Name and Contact Details */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            {CONFIG.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            {CONFIG.tagline}
          </motion.p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-gray-600 dark:text-gray-300" />
              <span className="text-gray-600 dark:text-gray-300">
                {CONFIG.location}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-gray-600 dark:text-gray-300" />
              <span className="text-gray-600 dark:text-gray-300">
                {CONFIG.email}
              </span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100"
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {[
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Python",
              "Supabase",
              "Node.js",
              "Firebase",
              "MongoDB",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            Experience
          </motion.h2>
          <div className="space-y-6">
            {CONFIG.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section with Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            Education
          </motion.h2>
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
            {CONFIG.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="flex items-start space-x-6"
              >
                {/* Timeline Icon */}
                <div className="relative z-10">
                  <div className="p-2 bg-blue-600 dark:bg-blue-400 rounded-full text-white">
                    <GraduationCap size={20} />
                  </div>
                </div>
                {/* Education Details */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {edu.institution} · {edu.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            Projects
          </motion.h2>
          <div className="space-y-6">
            {CONFIG.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.name}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0.7 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-6">
            {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Icon size={24} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
          {/* Copyright Line */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} {CONFIG.name}. All rights
            reserved.
          </p>
        </footer>

        {/* Back to Top Button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default App;
