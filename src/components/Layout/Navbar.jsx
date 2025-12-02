import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { HiMenuAlt4 } from "react-icons/hi";
import ThemeToggle from '../UI/ThemeToggle';
import PropTypes from 'prop-types';
import { CONFIG } from '../../data/config';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
    ];

    return (
        <>
            {/* Floating Capsule Navbar */}
            <nav
                className="fixed top-6 left-0 right-0 mx-auto w-full max-w-7xl z-50 px-4 md:px-6"
            >
                <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center md:gap-8">

                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2 shrink-0"
                    >
                        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            {CONFIG.name}
                        </span>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex items-center space-x-1"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>

                    {/* Right Side Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center space-x-2 shrink-0"
                    >
                        {/* Dark Mode Toggle */}
                        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="text-gray-600 dark:text-gray-400" size={18} />
                            ) : (
                                <HiMenuAlt4 className="text-gray-600 dark:text-gray-400" size={18} />
                            )}
                        </button>
                    </motion.div>
                </div>

                {/* Mobile Menu Dropdown (Detached) */}
                <motion.div
                    initial={false}
                    animate={{
                        height: mobileMenuOpen ? "auto" : 0,
                        opacity: mobileMenuOpen ? 1 : 0,
                        y: mobileMenuOpen ? 10 : -10,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-xl mt-2 mx-auto w-full"
                >
                    <div className="px-4 py-4 space-y-2 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="block w-full text-center font-sans text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl py-3 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </>
    );
};

Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
