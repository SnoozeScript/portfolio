import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionHeading = ({ title, subtitle, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${className}`}
        >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent">
                {title}
            </h2>
            {subtitle && (
                <>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
                    <p className="text-lg font-body text-gray-600 dark:text-gray-400 max-w-2xl">
                        {subtitle}
                    </p>
                </>
            )}
        </motion.div>
    );
};

SectionHeading.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

export default SectionHeading;
