import { motion, useScroll, useTransform } from 'framer-motion';
import { User, Code, Zap, Cpu, Globe, Palette } from 'lucide-react';
import { useRef } from 'react';

const FloatingOrb = ({ delay, className }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
        className={`absolute rounded-full blur-3xl ${className}`}
    />
);

const TechBadge = ({ icon: Icon, label, delay, x, y }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
            type: "spring",
            stiffness: 200,
            delay,
            y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5
            }
        }}
        animate={{ y: [0, -10, 0] }}
        className="absolute flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg z-30"
        style={{ left: x, top: y }}
        whileHover={{ scale: 1.1, borderColor: "#6366f1" }}
    >
        <Icon size={16} className="text-accent" />
        <span className="text-xs font-bold tracking-wide">{label}</span>
    </motion.div>
);

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden min-h-screen flex items-center">
            {/* Dynamic Background */}
            <FloatingOrb delay={0} className="w-[500px] h-[500px] bg-purple-600/20 -top-20 -left-20" />
            <FloatingOrb delay={2} className="w-[400px] h-[400px] bg-accent/20 bottom-0 right-0" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Visual Side (Left) */}
                    <motion.div
                        style={{ y: y1, rotate }}
                        className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center"
                    >
                        <div className="relative w-[450px] h-[450px] group">
                            {/* Profile Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-800/50 shadow-2xl z-20 group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 mix-blend-overlay z-10" />
                                <img
                                    src="/src/assets/images/profile.jpg"
                                    alt="Dharanidharan"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <TechBadge icon={Code} label="React" delay={0.2} x="-20%" y="-10%" />
                            <TechBadge icon={Cpu} label="AI/ML" delay={0.4} x="100%" y="5%" />
                            <TechBadge icon={Palette} label="Figma" delay={0.6} x="-15%" y="90%" />
                            <TechBadge icon={Globe} label="Web3" delay={0.8} x="95%" y="85%" />
                        </div>
                    </motion.div>

                    {/* Content Side (Right) */}
                    <motion.div
                        style={{ y: y2 }}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-bold mb-8 opacity-10 absolute -top-20 -right-20 pointer-events-none select-none">
                                ABOUT
                            </h2>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-accent" />
                                <span className="text-accent font-mono tracking-widest uppercase text-sm">Who I Am</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Dharanidharan</span>
                            </h3>

                            <p className="text-text-muted text-lg mb-8 leading-relaxed border-l-2 border-slate-800 pl-6">
                                I am a passionate tech explorer dedicated to building real-world solutions. My journey is fueled by a deep curiosity for technology and a drive to solve complex problems through creative thinking and innovation.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { label: "Education", value: "M.Tech in Computer Science (Information Security) at VIT" },
                                    { label: "Experience", value: "UI/UX design, Web Development, AI & ML-based project development" },
                                    { label: "Personality", value: "Creative thinker, tech explorer, problem solver" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="p-4 bg-secondary/30 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                                    >
                                        <h4 className="text-sm text-accent font-bold uppercase tracking-wider mb-1">{item.label}</h4>
                                        <p className="text-white font-medium">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
