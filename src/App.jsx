import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import farmgeniusPreview from "./assets/images/projects/farmgeniusPreview.png";
import chatassistantPreview from "./assets/images/projects/chatassistantPreview.png";
import otakuhavenPreview from "./assets/images/projects/otakuhavenPreview.png";
import text2voxPreview from "./assets/images/projects/text2voxPreview.png";
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
  Menu,
  X,
} from "lucide-react";

const CONFIG = {
  name: "Aadil Inamdar",
  tagline: "AI/ML Student & Developer",
  location: "Kolhapur, Maharashtra, India",
  email: "contact@aadilinamdar27.me",
  about: "An Artificial Intelligence and Machine Learning student at Sanjay Ghodawat University. This is a portfolio and archive of my journey to explore how machines think, learn, and help us build better technology from the foundations of logic and code to real-world AI projects, web apps, and beyond.",
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
    "Firebase", "MongoDB", "Git",
    "LangChain", "LLM Gen AI", "Machine Learning"
  ],
  experience: [
    {
      company: "Anthaathi",
      role: "Intern",
      duration: "Jul 2025",
      highlights: [
        "Gained hands-on experience in software development",
        "Worked on real-world projects and applications",
        "Collaborated with experienced development teams"
      ],
    },
    {
      company: "Prismas",
      role: "Freelance Developer",
      duration: "Apr 2025",
      highlights: [
        "Developed custom solutions for client requirements",
        "Delivered high-quality web applications",
        "Managed project timelines and client communications"
      ],
    },
    {
      company: "Synfuse",
      role: "Freelance Developer",
      duration: "Jan 2023 - Mar 2025",
      highlights: [
        "Built full-stack applications for diverse clients",
        "Implemented modern web technologies and frameworks",
        "Maintained long-term client relationships over 2+ years"
      ],
    },
  ],
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
      name: "FarmGenius",
      description:
        "Advanced multi-agent agricultural assistant designed for Indian farmers, combining AI-driven chat, real-time yield prediction, market price forecasting, and disease diagnosis in a unified platform.",
      tech: ["React", "FastAPI", "Python", "Gemini API", "Google Maps", "TailwindCSS", "Machine Learning"],
      link: "https://404-snowy.vercel.app",
      github: "https://github.com/SnoozeScript/404",
      highlights: [
        "Multi-agent system with specialized AI agents",
        "Real-time market price scraping from AgMarkNet",
        "Computer vision for crop disease detection",
        "Google Maps integration for location-based predictions",
        "Contextual AI chat assistant powered by Gemini"
      ]
    },
    {
      name: "Chat Assistant",
      description:
        " An AI-powered chat assistant built with Streamlit, LangChain, and Groq. Choose from multiple LLMs for fast, intelligent, and customizable conversations.",
      tech: ["Python", "GroqCloud API", "Streamlit", "LangChain"],
      link: "https://snoozescript-chat.streamlit.app",
      github: "https://github.com/SnoozeScript/ChatAssistant",
      highlights: [
        "Multiple LLM support with model switching",
        "Fast responses powered by Groq Cloud API",
        "LangChain integration for advanced capabilities",
        "Streamlit-based intuitive user interface",
        "Conversation history and context management"
      ]
    },
    {
      name: "OtakuHaven",
      description:
        "Entertainment platform for anime and movies with personalized recommendations and watchlists.",
      tech: ["React", "TMDB API", "Firebase"],
      link: "https://otaku-haven-alpha.vercel.app",
      github: "https://github.com/SnoozeScript/OtakuHaven",
      highlights: [
        "Personalized anime and movie recommendations",
        "Custom watchlists and favorites management",
        "Real-time data from TMDB API",
        "Firebase authentication and database",
        "Responsive design for all devices"
      ]
    },
    {
      name: "Text2Vox",
      description:
        "Text-to-speech application using HuggingFace models to generate natural audio with customizable voices and parameters.",
      tech: ["React", "HuggingFace API", "Web Audio"],
      link: "https://text2-vox.vercel.app",
      github: "https://github.com/SnoozeScript/Text2Vox",
      highlights: [
        "Multiple voice models from HuggingFace",
        "Customizable speech parameters and settings",
        "Real-time audio generation and playback",
        "Web Audio API integration",
        "Download generated audio files"
      ]
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        {/* Enhanced Full Screen Background Grid */}
        <div className="fixed inset-0 opacity-60 dark:opacity-50 pointer-events-none z-0 overflow-hidden">
          {/* Single Grid System */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Dynamic Glow Effects */}
          <div className="absolute inset-0">
            {/* Moving Light Sweeps */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/25 dark:via-blue-300/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-200/20 dark:via-purple-300/15 to-transparent"></div>
            
            {/* Diagonal Energy Lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 dark:via-blue-400/25 to-transparent"></div>
              <div className="absolute top-0 left-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400/25 dark:via-indigo-400/20 to-transparent"></div>
              <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/30 dark:via-purple-400/25 to-transparent"></div>
              <div className="absolute top-0 right-1/6 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/25 dark:via-cyan-400/20 to-transparent"></div>
              
              {/* Horizontal Lines */}
              <div className="absolute left-0 top-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-400/25 dark:via-violet-400/20 to-transparent"></div>
              <div className="absolute left-0 top-2/3 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/25 dark:via-emerald-400/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating Light Orbs */}
          <div className="absolute inset-0">
            {/* Large Orbs */}
            <div className="absolute top-1/5 left-1/6 w-4 h-4 bg-blue-400/40 dark:bg-blue-300/35 rounded-full blur-sm shadow-lg shadow-blue-400/20"></div>
            <div className="absolute top-3/4 right-1/5 w-3.5 h-3.5 bg-purple-400/40 dark:bg-purple-300/35 rounded-full blur-sm shadow-lg shadow-purple-400/20"></div>
            <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-cyan-400/45 dark:bg-cyan-300/40 rounded-full blur-sm shadow-lg shadow-cyan-400/20"></div>
            
            {/* Medium Orbs */}
            <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-violet-400/35 dark:bg-violet-300/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-emerald-400/40 dark:bg-emerald-300/35 rounded-full blur-sm"></div>
            <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-pink-400/35 dark:bg-pink-300/30 rounded-full blur-sm"></div>
            
            {/* Small Accent Orbs */}
            <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-orange-400/30 dark:bg-orange-300/25 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/2 right-2/3 w-1.5 h-1.5 bg-teal-400/35 dark:bg-teal-300/30 rounded-full blur-sm"></div>
            <div className="absolute top-4/5 left-1/3 w-1 h-1 bg-rose-400/30 dark:bg-rose-300/25 rounded-full blur-sm"></div>
          </div>
          
          {/* Intersection Glow Points */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-md"></div>
            <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-md"></div>
            <div className="absolute bottom-1/3 left-3/4 w-4 h-4 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-md"></div>
          </div>
        </div>
        {/* Modern Navigation */}
        <nav className="fixed w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                💤SnoozeScript
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a
                href="#home"
                className="font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#skills"
                className="font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#experience"
                className="font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#projects"
                className="font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#education"
                className="font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.div>

            {/* Right Side Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="text-yellow-500" size={18} />
                ) : (
                  <Moon className="text-gray-600" size={18} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="text-gray-600 dark:text-gray-400" size={18} />
                ) : (
                  <Menu className="text-gray-600 dark:text-gray-400" size={18} />
                )}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: mobileMenuOpen ? "auto" : 0,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="block font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#skills"
                onClick={closeMobileMenu}
                className="block font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={closeMobileMenu}
                className="block font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="block font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Projects
              </a>
              <a
                href="#education"
                onClick={closeMobileMenu}
                className="block font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Education
              </a>
            </div>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-20 z-10">
          {/* Enhanced Multi-Layer Glow System */}
          <div className="absolute inset-0">
            {/* Primary Central Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/8 via-purple-400/5 to-transparent rounded-full blur-3xl"></div>
            
            {/* Secondary Glow Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-400/10 via-indigo-400/6 to-transparent rounded-full blur-2xl"></div>
            
            {/* Tertiary Inner Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-violet-400/12 via-pink-400/7 to-transparent rounded-full blur-xl"></div>
            
            {/* Floating Energy Particles */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-radial from-blue-400/15 to-transparent rounded-full blur-md"></div>
            <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-radial from-purple-400/18 to-transparent rounded-full blur-md"></div>
            <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-gradient-radial from-cyan-400/12 to-transparent rounded-full blur-lg"></div>
          </div>
          
          {/* Enhanced Floating Geometric Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/40 rounded-sm rotate-45 shadow-lg shadow-blue-400/15"></div>
            <div className="absolute top-40 right-20 w-4 h-4 border-2 border-purple-400/40 rotate-12 shadow-lg shadow-purple-400/10"></div>
            <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400/50 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <div className="absolute top-60 right-40 w-3 h-3 border-2 border-indigo-400/40 rounded-full shadow-lg shadow-indigo-400/12"></div>
            <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-pink-400/45 rotate-45 shadow-lg shadow-pink-400/15"></div>
            <div className="absolute top-32 left-1/2 w-2 h-2 bg-emerald-400/40 rounded-full shadow-lg shadow-emerald-400/12"></div>
            <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-violet-400/50 shadow-lg shadow-violet-400/18"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 max-w-4xl"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 rounded-full"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent leading-tight"
            >
              {CONFIG.name}
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg md:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-10 italic leading-relaxed"
            >
              {CONFIG.tagline}
            </motion.p>            {/* About */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <p className="font-body text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
                {CONFIG.about}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 group"
                >
                  <Icon size={18} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="font-sans text-sm font-medium">{label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                <MapPin size={16} />
                <span>{CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                <Mail size={16} />
                <a href={`mailto:${CONFIG.email}`} className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {CONFIG.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section - Enhanced Design */}
        <section id="skills" className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center tracking-tight"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </motion.h2>

          {/* Skills Grid with Categories */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                `,
              }}></div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {CONFIG.skills.map((skill, index) => {
                // Define skill categories and colors
                const getSkillStyle = (skillName) => {
                  if (['JavaScript', 'React.js', 'Node.js'].includes(skillName)) {
                    return {
                      gradient: 'from-yellow-400 via-orange-500 to-red-500',
                      bg: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
                      icon: '⚡'
                    };
                  } else if (['Python', 'TensorFlow', 'Machine Learning'].includes(skillName)) {
                    return {
                      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
                      bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
                      icon: '🤖'
                    };
                  } else if (['LangChain', 'LLM Gen AI'].includes(skillName)) {
                    return {
                      gradient: 'from-purple-400 via-pink-500 to-indigo-500',
                      bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
                      icon: '🧠'
                    };
                  } else if (['Firebase', 'MongoDB'].includes(skillName)) {
                    return {
                      gradient: 'from-green-400 via-emerald-500 to-teal-500',
                      bg: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
                      icon: '🗄️'
                    };
                  } else {
                    return {
                      gradient: 'from-gray-400 via-slate-500 to-gray-600',
                      bg: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
                      icon: '🛠️'
                    };
                  }
                };

                const skillStyle = getSkillStyle(skill);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateX: 5,
                      rotateY: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    {/* Skill Card */}
                    <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skillStyle.bg} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                      
                      {/* Gradient Border Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skillStyle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {skillStyle.icon}
                        </div>
                        
                        {/* Skill Name */}
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                          {skill}
                        </h3>
                        
                        {/* Skill Level Indicator */}
                        <div className="flex justify-center gap-1 mb-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: 0 }}
                              whileInView={{ width: 8 }}
                              transition={{ delay: index * 0.1 + i * 0.1 }}
                              className={`h-1 bg-gradient-to-r ${skillStyle.gradient} rounded-full`}
                            ></motion.div>
                          ))}
                        </div>
                        
                        {/* Animated Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skillStyle.gradient} rounded-full`}
                          ></motion.div>
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                      <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-10 -left-10 text-4xl opacity-10 dark:opacity-5 animate-bounce">💻</div>
            <div className="absolute -top-16 -right-8 text-3xl opacity-10 dark:opacity-5 animate-pulse">🚀</div>
            <div className="absolute -bottom-12 -left-8 text-3xl opacity-10 dark:opacity-5 animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
            <div className="absolute -bottom-8 -right-12 text-4xl opacity-10 dark:opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}>🔥</div>
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <span className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">Frontend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                <span className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">AI/ML</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                <span className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">Gen AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                <span className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">Database</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
            <p className="text-lg font-body text-gray-600 dark:text-gray-400 max-w-2xl">
              My professional journey in software development, from freelance projects to industry internships.
            </p>
          </motion.div>

          {/* Simple Timeline */}
          <div className="space-y-8">
            {CONFIG.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 ${
                  index === 0 ? 'bg-blue-500' :
                  index === 1 ? 'bg-emerald-500' :
                  'bg-purple-500'
                }`}></div>

                {/* Content */}
                <div className="pb-8">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="font-sans text-sm font-medium text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
            <p className="text-lg font-body text-gray-600 dark:text-gray-400 max-w-2xl">
              Explore my latest projects that showcase the power of AI and modern web development in solving real-world challenges.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {CONFIG.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Project Visual */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    {/* Live Preview Container */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Browser Bar */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 dark:text-gray-400 truncate">
                            {project.link}
                          </div>
                        </div>
                      </div>
                      
                      {/* Live Preview Content */}
                      <div className="flex-1 relative overflow-hidden bg-gray-50 dark:bg-gray-800">
                        {/* Project Screenshot */}
                        <img 
                          src={
                            index === 0 ? farmgeniusPreview :
                            index === 1 ? chatassistantPreview :
                            index === 2 ? otakuhavenPreview :
                            text2voxPreview
                          }
                          alt={`${project.name} Preview`}
                          className="w-full h-full object-cover object-top"
                        />
                        
                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm"
                        >
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-sans font-medium flex items-center gap-2 shadow-lg"
                          >
                            <ExternalLink size={18} />
                            Open Live Demo
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Project Header */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                    >
                      {project.name}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="font-body text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Key Features */}
                  {project.highlights && (
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5"
                    >
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 4).map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-blue-500 mt-1 text-xs flex-shrink-0">●</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Project Links */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-sans font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-sans font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Timeline - New Modern Design */}
        <section id="education" className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold mb-20 text-center"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </motion.h2>

          <div className="relative">
            {/* Modern Stepped Timeline */}
            <div className="grid gap-8 md:gap-12">
              {CONFIG.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                    className="relative flex-shrink-0"
                  >
                    {/* Year Badge */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
                        {edu.duration.split(' - ')[0]}
                      </div>
                    </div>
                    
                    {/* Main Node */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                        <GraduationCap className="text-2xl text-blue-600 dark:text-blue-400" size={28} />
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < CONFIG.education.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
                    )}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 max-w-lg"
                  >
                    <div className="relative group">
                      {/* Card Background with Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      
                      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                        {/* Institution Badge */}
                        <div className="inline-block mb-4">
                          <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full">
                            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                              {edu.institution}
                            </span>
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
                          <span className="font-medium">{edu.duration}</span>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                            <Award className="text-yellow-500" size={20} />
                            Highlights
                          </h4>
                          <div className="grid gap-3">
                            {edu.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-100/20 via-blue-100/20 to-purple-100/20 dark:from-emerald-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Timeline Connector */}
                  {index < CONFIG.education.length - 1 && (
                    <div className="md:hidden w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30 mx-auto"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="relative bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    💤
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                  Passionate about creating innovative solutions through technology and code.
                </p>
                {/* Social Links */}
                <div className="flex gap-4">
                  {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -2, scale: 1.1 }}
                      className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "Skills", href: "#skills" },
                    { label: "Experience", href: "#experience" },
                    { label: "Projects", href: "#projects" },
                    { label: "Education", href: "#education" },
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Mail size={16} className="text-blue-500" />
                    <a 
                      href={`mailto:${CONFIG.email}`}
                      className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {CONFIG.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="text-blue-500" />
                    <span className="text-sm">{CONFIG.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Built with React, Tailwind CSS & Framer Motion
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
                  <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <ArrowUp size={14} />
                    Back to Top
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/10 to-cyan-50/20 dark:from-blue-900/5 dark:via-purple-900/5 dark:to-cyan-900/5 pointer-events-none"></div>
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