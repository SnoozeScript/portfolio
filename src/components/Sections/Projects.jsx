import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { CONFIG } from '../../data/config';
import SectionHeading from '../UI/SectionHeading';
import GitHubButton from '../UI/GitHubButton';

const Projects = () => {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 md:px-6 py-24">
            <SectionHeading
                title="Featured Projects"
                subtitle="Explore my latest work showcasing AI integration and modern web development."
            />

            <div className="grid grid-cols-1 gap-16 mt-16">
                {CONFIG.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-3/5 relative perspective-1000">
                            <motion.div
                                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 aspect-video flex flex-col"
                            >
                                {/* Browser Bar */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-20 relative">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-center text-gray-500 dark:text-gray-400 font-mono truncate opacity-70 max-w-[200px] mx-auto">
                                            {project.link.replace(/^https?:\/\//, '')}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex-1 overflow-hidden group-hover:opacity-90 transition-opacity">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Floating Tech Stack (Desktop) */}
                                <div className="absolute bottom-4 left-4 right-4 z-20 hidden md:flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-black/70 text-white backdrop-blur-md rounded-full border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}

                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-2/5 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-wider">0{index + 1}</span>
                                    <div className="h-px w-12 bg-blue-600/30 dark:bg-blue-400/30"></div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {project.name}
                                </h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>

                            {/* Tech Stack (Mobile/Visible) */}
                            <div className="flex flex-wrap gap-2 md:hidden">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Key Highlights</h4>
                                <ul className="space-y-2">
                                    {project.highlights.slice(0, 3).map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                            <Sparkles size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
                                >
                                    <span>View Project</span>
                                    <ExternalLink size={18} className="transition-transform group-hover/btn:rotate-45" />
                                </a>
                                {project.github && (
                                    <GitHubButton repoUrl={project.github} />
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
