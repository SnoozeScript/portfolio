import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { CONFIG } from '../../data/config';
import SectionHeading from '../UI/SectionHeading';

const Education = () => {
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
        <section id="education" className="max-w-7xl mx-auto px-4 md:px-6 py-20">
            <SectionHeading
                title="Educational Journey"
                subtitle="My academic background and achievements that laid the foundation for my career."
            />

            <div className="max-w-4xl mx-auto">
                <div ref={containerRef} className="relative mt-16 ml-4 md:ml-8">
                    {/* Background Line (Gray) */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 origin-top"></div>

                    {/* Animated Line (Gradient - Emerald) */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-blue-500 origin-top"
                    ></motion.div>

                    <div className="space-y-12">
                        {CONFIG.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Icon */}
                                <div className="absolute left-[-12px] top-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10 ring-4 ring-white dark:ring-gray-950">
                                    <GraduationCap size={14} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-colors duration-300 shadow-sm hover:shadow-md group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <div className="text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                                                {edu.institution}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 w-fit">
                                            <Calendar size={14} />
                                            {edu.duration}
                                        </div>
                                    </div>

                                    {/* Achievements / Highlights */}
                                    {edu.achievements && (
                                        <div className="mt-2">
                                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                                <Award size={14} className="text-yellow-500" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
