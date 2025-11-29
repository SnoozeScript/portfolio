import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Card;
