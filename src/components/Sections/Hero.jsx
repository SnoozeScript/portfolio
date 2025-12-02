import { motion } from 'framer-motion';
import { Code, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../data/config';
import TechGlobe from '../UI/TechGlobe';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Background Elements */}
            {/* Background Elements - Removed as per user request */}
            <div className="absolute inset-0 pointer-events-none">
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
                {/* Left Column: Content */}
                <div className="flex flex-col items-start">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    {/* Name Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                    >
                        Hi, I&apos;m <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            {CONFIG.name}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed whitespace-pre-line"
                    >
                        {CONFIG.about.split("Microsoft Learn Student Club").map((part, index, array) => (
                            <span key={index}>
                                {part}
                                {index < array.length - 1 && (
                                    <a
                                        href="https://sgumlsc.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        Microsoft Learn Student Club
                                    </a>
                                )}
                            </span>
                        ))}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-start gap-6 mb-12"
                    >
                        <Link
                            to="/resume"
                            className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 hover:gap-3 transition-all group"
                        >
                            Resume <FileText size={20} className="group-hover:text-blue-600 transition-colors" />
                        </Link>

                        <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                            Contact: <a href={`mailto:${CONFIG.email}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400">{CONFIG.email}</a>
                        </div>
                    </motion.div>

                    {/* Social Stats / Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-6 pt-8 w-full"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin className="text-gray-400" size={20} />
                            <span className="text-gray-600 dark:text-gray-400">{CONFIG.location}</span>
                        </div>
                        <div className="flex gap-4">
                            {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual (Tech Globe) */}
                <div className="relative hidden lg:block h-full min-h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <TechGlobe />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
