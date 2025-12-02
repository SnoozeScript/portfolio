import { CONFIG } from '../data/config';
import { Mail, Linkedin, Github, Globe, Download, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Navigation & Actions */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Portfolio</span>
                </Link>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Download size={18} />
                    <span>Download PDF</span>
                </button>
            </div>

            {/* Resume Paper */}
            <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-xl print:shadow-none print:w-full print:max-w-none p-8 md:p-12 rounded-lg">

                {/* Header */}
                <header className="border-b-2 border-gray-300 pb-4 mb-6">
                    <h1 className="text-5xl font-bold text-gray-900 uppercase tracking-tight mb-2">{CONFIG.name}</h1>


                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <a href={`mailto:${CONFIG.email}`} className="flex items-center gap-1.5 hover:text-blue-600">
                            <Mail size={14} />
                            {CONFIG.email}
                        </a>
                        <a href={`tel:${CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-blue-600">
                            <Phone size={14} />
                            {CONFIG.phone}
                        </a>
                        <a href={CONFIG.socialLinks.find(l => l.label === 'LinkedIn')?.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600">
                            <Linkedin size={14} />
                            LinkedIn
                        </a>
                        <a href={CONFIG.socialLinks.find(l => l.label === 'GitHub')?.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600">
                            <Github size={14} />
                            GitHub
                        </a>
                        <Link to="/" className="flex items-center gap-1.5 hover:text-blue-600">
                            <Globe size={14} />
                            Portfolio
                        </Link>
                        <span className="flex items-center gap-1.5">
                            📍 {CONFIG.location}
                        </span>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-3 inline-block border-b-2 border-gray-900 pb-1">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {CONFIG.resumeSummary}
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 inline-block border-b-2 border-gray-900 pb-1">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                        {/* Left Column */}
                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900 w-24 flex-shrink-0">Languages:</span>
                                <span className="text-gray-700">Python, JavaScript, TypeScript</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900 w-24 flex-shrink-0">Backend:</span>
                                <span className="text-gray-700">Node.js, Express, FastAPI, Firebase, MongoDB</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900 w-24 flex-shrink-0">Tools:</span>
                                <span className="text-gray-700">Git, VS Code, Linux</span>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900 w-24 flex-shrink-0">Frontend:</span>
                                <span className="text-gray-700">React.js, Tailwind CSS, HTML5, CSS3, Framer Motion</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900 w-24 flex-shrink-0">AI / ML:</span>
                                <span className="text-gray-700">TensorFlow, LangChain, LLMs, Computer Vision</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 inline-block border-b-2 border-gray-900 pb-1">Professional Experience</h2>
                    <div className="space-y-6">
                        {CONFIG.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                                </div>
                                <div className="text-blue-600 font-medium text-sm mb-2">{exp.company}</div>
                                <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 inline-block border-b-2 border-gray-900 pb-1">Featured Projects</h2>
                    <div className="space-y-6">
                        {CONFIG.resumeProjects.map((project, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                                    <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                                        {project.tech.join(' • ')}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                                <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 inline-block border-b-2 border-gray-900 pb-1">Education</h2>
                    <div className="space-y-6">
                        {CONFIG.education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                                    <span className="text-sm text-gray-500 font-medium">{edu.duration}</span>
                                </div>
                                <div className="text-sm text-gray-700 mb-2">{edu.degree}</div>
                                {edu.achievements && (
                                    <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                                        {edu.achievements.slice(0, 2).map((achievement, i) => (
                                            <li key={i}>
                                                {achievement.split(/(https?:\/\/[^\s\)]+)/g).map((part, j) =>
                                                    part.match(/^https?:\/\//) ? (
                                                        <a key={j} href={part} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                                            {part}
                                                        </a>
                                                    ) : (
                                                        part
                                                    )
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ResumePage;
