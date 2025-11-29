import { CONFIG } from '../../data/config';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} {CONFIG.name}. All rights reserved.
                </div>

                <div className="flex items-center gap-4">
                    {CONFIG.socialLinks.map(({ Icon, link, label }, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
