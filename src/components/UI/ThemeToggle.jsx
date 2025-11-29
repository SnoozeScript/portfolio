import { Sun, Moon } from 'lucide-react';
import PropTypes from 'prop-types';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Toggle dark mode"
        >
            {darkMode ? (
                <Sun className="text-yellow-500" size={18} />
            ) : (
                <Moon className="text-gray-600" size={18} />
            )}
        </button>
    );
};

ThemeToggle.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default ThemeToggle;
