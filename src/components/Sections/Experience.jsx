import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';
import { CONFIG } from '../../data/config';
import SectionHeading from '../UI/SectionHeading';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <SectionHeading
                title="Work Experience"
                subtitle="My professional journey in software development, from freelance projects to industry internships."
            />

            <div className="max-w-4xl mx-auto">
                <div ref={containerRef} className="relative mt-16 ml-4 md:ml-8">
                    {/* Background Line (Gray) */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 origin-top"></div>

                    {/* Animated Line (Gradient) */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
                    ></motion.div>

                    <div className="space-y-12">
                        {CONFIG.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Icon */}
                                <div className="absolute left-[-12px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10 ring-4 ring-white dark:ring-gray-950">
                                    <Briefcase size={14} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-1">
                                                <Briefcase size={16} />
                                                {exp.link ? (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:underline flex items-center gap-1"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 w-fit">
                                            <Calendar size={14} />
                                            {exp.duration}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
