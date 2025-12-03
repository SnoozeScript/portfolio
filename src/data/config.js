import {
  Linkedin,
  Github,
  FileCode,
} from "lucide-react";
import { FaXTwitter,FaWhatsapp } from "react-icons/fa6";
import farmgeniusPreview from "../assets/images/projects/farmgeniusPreview.png";
import chatassistantPreview from "../assets/images/projects/chatassistantPreview.png";
import otakuhavenPreview from "../assets/images/projects/otakuhavenPreview.png";
import text2voxPreview from "../assets/images/projects/text2voxPreview.png";

export const CONFIG = {
  name: "Aadil Inamdar",
  tagline: "Building Intelligent Systems & Scalable Web Solutions",
  location: "Kolhapur, Maharashtra, India",
  email: "aadilinamdar27@gmail.com",
  phone: "+91 9011156314",
  about: `I am pursuing my B.Tech in Artificial Intelligence & Machine Learning at Sanjay Ghodawat University, where I serve as the Technical Head at Microsoft Learn Student Club and co-lead the 'Cubicles' Tech Initiative. Before that, I received a Diploma in Computer Engineering from Dr. D. Y. Patil Polytechnic in 2023, graduating with distinction.

I am currently a Software Developer Intern at Anthaathi (2025-Present); previously, a Software Developer at Prismas (2025), delivering custom web solutions; and a Full Stack Developer at Synfuse (2023-2025), building scalable applications for diverse clients.`,
  resumeSummary: `I am pursuing my B.Tech in Artificial Intelligence & Machine Learning at Sanjay Ghodawat University, where I serve as the Technical Head at Microsoft Learn Student Club. Before that, I received a Diploma in Computer Engineering from Dr. D. Y. Patil Polytechnic in 2023. I am currently a Software Developer Intern at Anthaathi (2025-Present); previously, a Software Developer at Prismas (2025); and a Full Stack Developer at Synfuse (2023-2025). I enjoy participating in hackathons and building intelligent systems.`,
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
  skills: {
    "Frontend": ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["Node.js", "Python", "Firebase", "MongoDB"],
    "AI / ML": ["Machine Learning", "TensorFlow", "LangChain", "LLM Gen AI"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "Linux"]
  },
  experience: [
    {
      company: "Anthaathi",
      link: "https://anthaathi.com/",
      role: "Software Developer intern",
      duration: "Jul 2025 - Present",
      highlights: [
        "Developing high-performance, responsive user interfaces using React.js and Flutter.",
        "Collaborating with cross-functional teams to deliver seamless experiences.",
        "Optimizing frontend performance to ensure cross-browser compatibility."
      ],
    },
    {
      company: "Prismas",
      role: "Software Developer",
      duration: "Mar 2025 - Present",
      highlights: [
        "Delivered custom web solutions tailored to business needs.",
        "Implemented secure authentication and real-time database integrations.",
        "Managed project lifecycles, ensuring 100% client satisfaction."
      ],
    },
    {
      company: "Synfuse",
      role: "Full Stack Developer (Freelance)",
      duration: "Jan 2023 - Feb 2025",
      highlights: [
        "Developed and deployed scalable full-stack applications.",
        "Used modern frameworks like React and Node.js to build responsive interfaces.",
        "Maintained long-term client partnerships resulting in repeat business."
      ],
    },
  ],
  education: [
    {
      institution: "Sanjay Ghodawat University",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2023 - Present",
      achievements: [
        "Specializing in Deep Learning and Natural Language Processing.",
        "Technical Head at Microsoft Learn Student Club ",
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
      name: "OtakuHaven",
      image: otakuhavenPreview,
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
      name: "FarmGenius",
      image: farmgeniusPreview,
      description:
        "A comprehensive agricultural platform empowering Indian farmers with AI-driven insights. Features a multi-agent system for disease diagnosis, real-time market price forecasting, and personalized crop recommendations.",
      tech: ["React", "FastAPI", "Python", "Gemini API", "Google Maps", "TailwindCSS"],
      link: "https://404-snowy.vercel.app",
      github: "https://github.com/SnoozeScript/404",
      highlights: [
        "Engineered a multi-agent system using LangChain for specialized tasks.",
        "Integrated computer vision for instant crop disease detection with good accuracy.",
        "Implemented real-time data scraping from AgMarkNet for accurate price trends.",
        "Developed a location-aware chatbot providing localized farming advice."
      ]
    },
    {
      name: "Chat Assistant",
      image: chatassistantPreview,
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
      name: "Text2Vox",
      image: text2voxPreview,
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
  resumeProjects: [
    {
      name: "OtakuHaven",
      tech: ["React", "TMDB API", "Firebase", "Framer Motion"],
      description:
        "An immersive entertainment discovery platform providing personalized recommendations, detailed metadata, and social features for tracking watch history.",
      highlights: [
        "Leveraged TMDB API to fetch extensive metadata for thousands of titles.",
        "Implemented secure user authentication and cloud storage using Firebase.",
        "Created a dynamic, responsive UI with smooth transitions and animations.",
        "Developed a recommendation engine based on user preferences and viewing history."
      ]
    },
    {
      name: "FarmGenius",
      tech: ["React", "FastAPI", "Python", "Gemini API", "Google Maps", "TailwindCSS"],
      description:
        "A comprehensive agricultural platform empowering farmers with AI-driven insights, disease diagnosis, and real-time market price forecasting.",
      highlights: [
        "Engineered a multi-agent system using LangChain for specialized tasks.",
        "Integrated computer vision for instant crop disease detection with good accuracy.",
        "Implemented real-time data scraping from AgMarkNet for accurate price trends.",
        "Developed a location-aware chatbot providing localized farming advice."
      ]
    },
    {
      name: "Chat Assistant",
      tech: ["Python", "GroqCloud API", "Streamlit", "LangChain"],
      description:
        "A versatile AI chat interface enabling interaction with multiple LLMs, supporting context-aware conversations and instant model switching.",
      highlights: [
        "Integrated GroqCloud API for ultra-low latency responses.",
        "Implemented seamless model switching between Llama 3, Mixtral, and Gemma.",
        "Built a persistent memory system to maintain conversation context.",
        "Designed a clean, intuitive UI using Streamlit for rapid deployment."
      ]
    },
    {
      name: "Text2Vox",
      tech: ["React", "HuggingFace API", "Web Audio API"],
      description:
        "A browser-based text-to-speech tool using HuggingFace models to generate natural-sounding speech with customizable voice parameters.",
      highlights: [
        "Integrated state-of-the-art TTS models from HuggingFace Inference API.",
        "Utilized Web Audio API for real-time audio processing and playback.",
        "Implemented a user-friendly interface for adjusting pitch, speed, and voice style.",
        "Enabled direct download of generated audio files for offline use."
      ]
    }
  ],
};
