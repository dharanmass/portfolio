import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Abstract Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium tracking-wide"
                    >
                        UI/UX Designer | AI Developer | Creative Technologist
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            {["Designing", "Digital"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, filter: "blur(20px)" },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: { duration: 1.5, ease: "easeOut" }
                                        }
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 30, filter: "blur(20px)" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        transition: { duration: 1.5, ease: "easeOut" }
                                    }
                                }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500"
                            >
                                Experiences
                            </motion.span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
                            {["with", "Artificial", "Intelligence"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, filter: "blur(20px)" },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: { duration: 1.5, ease: "easeOut" }
                                        }
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I craft immersive, intelligent web interfaces that blend cutting-edge AI with premium design aesthetics. Let's build the future together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Dharanidharan_Resume.pdf"
                            className="px-8 py-4 rounded-full border border-slate-700 hover:border-accent hover:text-accent transition-colors duration-300 flex items-center gap-2"
                        >
                            <Download size={20} /> Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
