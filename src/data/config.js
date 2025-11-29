import {
  Linkedin,
  Github,
  FileCode,
} from "lucide-react";
import { FaXTwitter,FaWhatsapp } from "react-icons/fa6";

export const CONFIG = {
  name: "Aadil Inamdar",
  tagline: "Building Intelligent Systems & Scalable Web Solutions",
  location: "Kolhapur, Maharashtra, India",
  email: "aadilinamdar27@gmail.com",
  about: "I engineer intelligent systems that bridge the gap between complex AI algorithms and intuitive human experiences. As an AI/ML Engineer and Full-Stack Developer, I specialize in crafting scalable multi-agent architectures, next-gen generative AI applications, and responsive digital platforms. Driven by innovation, I transform abstract concepts into tangible, high-impact solutions.",
  socialLinks: [
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/in/aadilinamdar27/",
      label: "LinkedIn",
    },
    {
      Icon: Github,
      link: "https://github.com/snoozescript",
      label: "GitHub",
    },
    {
      Icon: FaXTwitter,
      link: "https://x.com/snoozescript",
      label: "X (Twitter)",
    },
        {
      Icon: FaWhatsapp,
      link: "https://wa.me/9011156314",
      label: "WhatsApp",
    },
    {
      Icon: FileCode,
      link: "https://dochub.aadilinamdar27.me",
      label: "Documentation",
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
      link: "https://anthaathi.com/",
      role: "Software Developer intern",
      duration: "Jul 2025 - Present",
      highlights: [
        "Developing responsive and interactive user interfaces using React.js and Flutter.",
        "Collaborating with cross-functional teams to deliver seamless web and mobile experiences.",
        "Optimizing frontend performance and ensuring cross-browser compatibility."
      ],
    },
    {
      company: "Prismas",
      role: "Freelance Developer",
      duration: "Apr 2025 - Jun 2025",
      highlights: [
        "Delivered custom web solutions tailored to client business needs.",
        "Implemented secure authentication and real-time database integrations.",
        "Ensured 100% client satisfaction through transparent communication and timely delivery."
      ],
    },
    {
      company: "Synfuse",
      role: "Full Stack Developer (Freelance)",
      duration: "Jan 2023 - Mar 2025",
      highlights: [
        "Developed and deployed full-stack applications for a diverse client base.",
        "Utilized modern frameworks like React and Node.js to build responsive interfaces.",
        "Maintained long-term partnerships with clients, resulting in repeat business."
      ],
    },
  ],
  education: [
    {
      institution: "Sanjay Ghodawat University",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2023 - 2026",
      achievements: [
        "Specializing in Deep Learning and Natural Language Processing.",
        "Active contributor to the Microsoft Learn Student Club.",
        "Lead Organizer for the 'Cubicles' Tech Initiative."
      ],
    },
    {
      institution: "Dr. D. Y. Patil Polytechnic",
      degree: "Diploma in Computer Engineering",
      duration: "2021 - 2023",
      achievements: [
        "Graduated with Distinction (Top 5% of class).",
        "Built a strong foundation in Algorithms, Data Structures, and OOP.",
      ],
    },
    {
      institution: "Chate School & Junior College",
      degree: "Higher Secondary Education (Science)",
      duration: "2019 - 2021",
      achievements: [
        "Completed with Distinction.",
        "Focus on Mathematics and Physics.",
      ],
    },
  ],
  projects: [
    {
      name: "FarmGenius",
      description:
        "A comprehensive agricultural platform empowering Indian farmers with AI-driven insights. Features a multi-agent system for disease diagnosis, real-time market price forecasting, and personalized crop recommendations.",
      tech: ["React", "FastAPI", "Python", "Gemini API", "Google Maps", "TailwindCSS"],
      link: "https://404-snowy.vercel.app",
      github: "https://github.com/SnoozeScript/404",
      highlights: [
        "Engineered a multi-agent system using LangChain for specialized tasks.",
        "Integrated computer vision for instant crop disease detection with 95% accuracy.",
        "Implemented real-time data scraping from AgMarkNet for accurate price trends.",
        "Developed a location-aware chatbot providing localized farming advice."
      ]
    },
    {
      name: "Chat Assistant",
      description:
        "A versatile AI chat interface enabling users to interact with multiple Large Language Models. Designed for speed and flexibility, it supports context-aware conversations and model switching on the fly.",
      tech: ["Python", "GroqCloud API", "Streamlit", "LangChain"],
      link: "https://snoozescript-chat.streamlit.app",
      github: "https://github.com/SnoozeScript/ChatAssistant",
      highlights: [
        "Integrated GroqCloud API for ultra-low latency responses.",
        "Implemented seamless model switching between Llama 3, Mixtral, and Gemma.",
        "Built a persistent memory system to maintain conversation context.",
        "Designed a clean, intuitive UI using Streamlit for rapid deployment."
      ]
    },
    {
      name: "OtakuHaven",
      description:
        "An immersive entertainment discovery platform for anime and movie enthusiasts. Provides personalized recommendations, detailed metadata, and social features for tracking watch history.",
      tech: ["React", "TMDB API", "Firebase", "Framer Motion"],
      link: "https://otaku-haven-alpha.vercel.app",
      github: "https://github.com/SnoozeScript/OtakuHaven",
      highlights: [
        "Leveraged TMDB API to fetch extensive metadata for thousands of titles.",
        "Implemented secure user authentication and cloud storage using Firebase.",
        "Created a dynamic, responsive UI with smooth transitions and animations.",
        "Developed a recommendation engine based on user preferences and viewing history."
      ]
    },
    {
      name: "Text2Vox",
      description:
        "A browser-based text-to-speech tool harnessing the power of HuggingFace models. Allows users to generate natural-sounding speech from text with customizable voice parameters.",
      tech: ["React", "HuggingFace API", "Web Audio API"],
      link: "https://text2-vox.vercel.app",
      github: "https://github.com/SnoozeScript/Text2Vox",
      highlights: [
        "Integrated state-of-the-art TTS models from HuggingFace Inference API.",
        "Utilized Web Audio API for real-time audio processing and playback.",
        "Implemented a user-friendly interface for adjusting pitch, speed, and voice style.",
        "Enabled direct download of generated audio files for offline use."
      ]
    }
  ],
  certifications: [
    {
      name: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud",
      date: "2023",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2022",
    },
  ],
};
