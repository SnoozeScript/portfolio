import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
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

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        Crafting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            Digital Intelligence
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed"
                    >
                        {CONFIG.about}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                        >
                            View Work
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href={`mailto:${CONFIG.email}`}
                            className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                        >
                            Contact Me
                            <Mail size={18} />
                        </a>
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
