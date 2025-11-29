import { motion } from 'framer-motion';

import SectionHeading from '../UI/SectionHeading';

const Skills = () => {
    // Group skills into categories for a cleaner layout
    const skillCategories = {
        "Frontend": ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
        "Backend": ["Node.js", "Python", "Firebase", "MongoDB"],
        "AI / ML": ["Machine Learning", "TensorFlow", "LangChain", "LLM Gen AI"],
        "Tools": ["Git", "GitHub", "VS Code", "Postman"]
    };

    return (
        <section id="skills" className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <SectionHeading
                title="Core Technologies"
                subtitle="A curated set of technologies I use to build scalable and intelligent solutions."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                    >
                        {/* Gradient Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="relative text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                            {category}
                        </h3>

                        <div className="relative flex flex-wrap gap-2">
                            {skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-full hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
