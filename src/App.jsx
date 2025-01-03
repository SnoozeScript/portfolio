import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Linkedin,
  Github,
  MapPin,
  Mail,
  ExternalLink,
  Rss,
  Bot,
} from "lucide-react";

// Improved and more modular animation configurations
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  },
  page: {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" },
  },
  pageTransition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  },
};

// Centralized configuration for easier maintenance
const CONFIG = {
  name: "Aadil Inamdar",
  tagline:
    "Full-stack developer and creative technologist passionate about building innovative digital experiences that blend cutting-edge technology with elegant, user-centric design.",
  location: "Kolhapur, Maharashtra, India",
  email: "aadilinamdar27@gmail.com",
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
      Icon: Rss,
      link: "https://blog.aadilinamdar.com",
      label: "Blog",
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
        "Designing intuitive and visually appealing user interfaces that enhance user experience.",
    },
    {
      name: "Machine Learning",
      Icon: Bot,
      description:
        "Building intelligent systems using data-driven models to predict, classify, and optimize solutions.",
    },
  ],
  projects: [
    {
      name: "Text2Vox",
      description:
        "Text2Vox is a user-friendly text-to-speech (TTS) web application that converts text into natural-sounding audio.",
      tech: ["React", "huggingface", "text-to-speech"],
      link: "https://text2-vox.vercel.app",
    },
    {
      name: "OtakuHaven",
      description:
        "Comprehensive platform aggregating anime, movies, and TV shows, providing a seamless entertainment experience.",
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

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-purple-200 group relative"
        >
          <Icon size={32} strokeWidth={1.5} />
          <span
            className="absolute bottom-full left-1/2 -translate-x-1/2 
            bg-white/20 text-white text-xs px-2 py-1 rounded-md 
            opacity-0 group-hover:opacity-100 transition-opacity 
            duration-300 pointer-events-none"
          >
            {label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}

function Hero() {
  const [activeTab, setActiveTab] = useState("about");
  const tabs = useMemo(() => ["about", "skills", "projects"], []);

  const renderSkills = useCallback(() => {
    return CONFIG.skills.map((skill, index) => {
      const SkillIcon = skill.Icon;
      return (
        <motion.div
          key={index}
          variants={animations.item}
          whileHover="hover"
          className="bg-white/10 p-8 rounded-2xl text-center 
          border border-white/10 backdrop-blur-sm 
          transform transition-all duration-300 
          hover:border-purple-300/50 hover:shadow-2xl
          group relative overflow-hidden"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center"
          >
            <SkillIcon
              size={64}
              className="text-white/80 stroke-[1.5] 
              group-hover:text-purple-300 transition-colors"
            />
          </motion.div>
          <p
            className="text-white font-semibold text-lg 
            group-hover:text-purple-200 transition-colors mb-2"
          >
            {skill.name}
          </p>
          <p className="text-white/70 text-sm">{skill.description}</p>
          <div
            className="absolute inset-0 bg-gradient-to-br 
            from-transparent to-purple-900/10 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 pointer-events-none"
          ></div>
        </motion.div>
      );
    });
  }, []);

  const renderProjects = useCallback(() => {
    return CONFIG.projects.map((project, index) => (
      <motion.div
        key={index}
        variants={animations.item}
        whileHover="hover"
        className="bg-white/10 p-6 rounded-2xl 
          border border-white/10 backdrop-blur-sm 
          transform transition-all duration-300 
          hover:border-purple-300/50 hover:shadow-2xl
          group relative"
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white/50 hover:text-white"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
        <p className="text-white/70 mb-4 text-base leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0.7 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="px-3 py-1 bg-white/20 text-white 
                rounded-full text-xs font-medium 
                transition-all duration-300 
                hover:bg-white/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div
          className="absolute inset-0 
          border-2 border-transparent group-hover:border-purple-300/30 
          rounded-2xl pointer-events-none transition-all duration-300"
        ></div>
      </motion.div>
    ));
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animations.container}
      className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 
        flex items-center justify-center overflow-hidden relative"
    >
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 
          bg-purple-600/20 rounded-full blur-3xl animate-pulse 
          opacity-50 dark:opacity-30"
        ></div>
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 
          bg-indigo-600/20 rounded-full blur-3xl animate-pulse 
          opacity-50 dark:opacity-30"
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <motion.h1
          variants={animations.item}
          className="text-7xl font-extrabold text-white mb-8 
            tracking-tighter drop-shadow-2xl 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-300 to-indigo-400"
        >
          {CONFIG.name}
        </motion.h1>

        <motion.div
          variants={animations.item}
          className="flex justify-center space-x-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              aria-selected={activeTab === tab}
              className={`
                px-6 py-3 rounded-full text-sm uppercase tracking-wider 
                font-bold transition-all duration-300 relative
                ${
                  activeTab === tab
                    ? "bg-white text-indigo-900 shadow-2xl"
                    : "text-white border-2 border-white/30 hover:bg-white/10"
                }
                group
              `}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-1 left-0 right-0 h-1 
                    bg-indigo-600 rounded-full mx-auto w-2/3"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial="initial"
              animate="in"
              exit="out"
              variants={animations.page}
              transition={animations.pageTransition}
            >
              <motion.p
                variants={animations.item}
                className="text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                {CONFIG.tagline}
              </motion.p>
              <motion.div
                variants={animations.item}
                className="flex justify-center space-x-6 mt-8"
              >
                <SocialLinks />
              </motion.div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial="initial"
              animate="in"
              exit="out"
              variants={animations.page}
              transition={animations.pageTransition}
              className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {renderSkills()}
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial="initial"
              animate="in"
              exit="out"
              variants={animations.page}
              transition={animations.pageTransition}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {renderProjects()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Contact Info */}
        <motion.div
          variants={animations.item}
          className="mt-12 flex items-center justify-center 
            space-x-4 text-white/70 bg-white/10 
            px-6 py-3 rounded-full backdrop-blur-sm"
        >
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-purple-300" />
            <span>{CONFIG.location}</span>
          </div>
          <div className="h-6 w-px bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-purple-300" />
            <span>{CONFIG.email}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="bg-gray-950">
      <Hero />
    </div>
  );
}

export default App;
