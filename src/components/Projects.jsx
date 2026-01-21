import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import carRentalImg from '../assets/car-rental-project.png';
import dashboardImg from '../assets/dashboard.png';
import phishingImg from '../assets/AI.jpg';

import aiRagImg from '../assets/ai_rag_system.png';

const projects = [
    {
        title: 'CAR RENTAL COMPARISON APP',
        description: 'A modern mobile app that compares car rental providers in real time, helping users choose the best price and features with an intuitive, user-friendly interface.',
        tags: ['React Native', 'Mobile App', 'UI/UX', 'Real-time'],
        links: { demo: 'https://www.behance.net/gallery/231589677/CAR-RENTAL-COMPARISON-APP', github: '#' },
        image: carRentalImg
    },
    {
        title: 'Web Attendance Dashboard',
        description: 'A responsive dashboard that visualizes attendance analytics with interactive charts and automated reports for streamlined academic and corporate monitoring.',
        tags: ['React', 'Dashboard', 'Analytics', 'Data Visualization'],
        links: { demo: 'https://www.behance.net/gallery/235848727/Web-Attendance-Dashboard', github: '#' },
        image: dashboardImg
    },
    {
        title: 'AI-Powered Real-Time Phishing Detection',
        description: 'An AI-driven system that analyzes website URLs and behavior patterns in real time to classify phishing threats with high accuracy, enhancing security using ML + Browser Extension workflow.',
        tags: ['AI/ML', 'Cybersecurity', 'Browser Extension', 'Python'],
        links: { demo: 'https://www.behance.net/gallery/236610197/AI-Powered-Real-Time-Phishing-Detection', github: '#' },
        image: phishingImg
    },
    {
        title: 'AI Chat RAG System Enterprise Document Intelligence',
        description: 'An AI-powered RAG system for enterprise document intelligence, featuring a document ingestion pipeline, vector knowledge base, and LLM integration.',
        tags: ['AI/ML', 'RAG', 'Python', 'Pinecone', 'Gemini'],
        links: { demo: '#', github: 'https://github.com/dharanmass/AI-Chat-RAG-System-Enterprise-Document-Intelligence' },
        image: aiRagImg
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl overflow-hidden glass-card hover:border-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500"
        >
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-muted mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-slate-700 text-text-muted">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={project.links.demo}
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                        <ExternalLink size={16} /> View Project
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-12 md:py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my expertise in building digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
