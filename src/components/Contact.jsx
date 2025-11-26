import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Email</p>
                                        <a href="mailto:dharanidharan@720gmail.com" className="font-medium hover:text-accent transition-colors">
                                            dharanidharan720@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Location</p>
                                        <p className="font-medium">Vellore, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-700">
                                <h4 className="text-sm font-semibold mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/dharanmass" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/dharani-dharan-1342211a4/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-primary transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://www.behance.net/dharanidharan58" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-primary transition-colors" title="Behance">
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.3
                                    }
                                }
                            }}
                            className="glass-card p-8 rounded-2xl space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-slate-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </motion.div>
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-slate-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>
                            </div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-text-muted">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-slate-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-slate-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </motion.div>
                            <motion.button
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-glow transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
