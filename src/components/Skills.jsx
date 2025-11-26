import { motion } from 'framer-motion';

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js",
    "GraphQL", "PostgreSQL", "Figma", "UI/UX Design", "Three.js", "AWS"
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 overflow-hidden bg-secondary/20">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Technical Expertise
                </motion.h2>
                <p className="text-text-muted">Tools and technologies I use to bring ideas to life.</p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex overflow-x-hidden group"
            >
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 opacity-50 hover:opacity-100 hover:from-accent hover:to-purple-500 transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 opacity-50 hover:opacity-100 hover:from-accent hover:to-purple-500 transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
