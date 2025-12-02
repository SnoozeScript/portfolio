import { useState, useEffect } from 'react';
import { Github, Star } from 'lucide-react';
import PropTypes from 'prop-types';

const GitHubButton = ({ repoUrl }) => {
    const [stars, setStars] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!repoUrl) return;

        const fetchStars = async () => {
            try {
                // Extract owner/repo from URL (e.g., https://github.com/owner/repo)
                const path = repoUrl.replace('https://github.com/', '');
                const response = await fetch(`https://api.github.com/repos/${path}`);

                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count);
                }
            } catch (error) {
                console.error("Failed to fetch stars", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStars();
    }, [repoUrl]);

    const formatCount = (count) => {
        if (count === null) return "0";
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count;
    };

    return (
        <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-[#24292e] hover:bg-[#2f363d] text-white rounded-md font-medium transition-colors text-sm"
            aria-label="Star on GitHub"
        >
            <Github size={16} />
            <span>Star</span>
            <span className="flex items-center gap-1 pl-2 border-l border-gray-600 text-gray-300 group-hover:text-white transition-colors">
                <Star size={14} className="group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-colors" />
                {loading ? "..." : formatCount(stars)}
            </span>
        </a>
    );
};

GitHubButton.propTypes = {
    repoUrl: PropTypes.string.isRequired,
};

export default GitHubButton;
