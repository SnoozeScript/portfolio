import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from '../UI/Background';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden font-sans">
                <Background />
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main className="relative z-10 pt-16">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
