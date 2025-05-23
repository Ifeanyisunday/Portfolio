import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const ContactInfo = () => (
    <section id="contact-info" className="py-20 bg-cyan-500">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-12 text-white"
            >
                Get in Touch
            </motion.h2>

            <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-xl">
                <div className="space-y-6">
                    {/* WhatsApp Contact */}
                    <div className="flex items-center space-x-4">
                        <Phone className="text-cyan-400 w-8 h-8" />
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-100">Message Me on WhatsApp</h3>
                            <a
                                href="https://wa.me/2348127980150" // Replace with your WhatsApp link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                +234 8127980150
                            </a>
                        </div>
                    </div>

                    {/* Gmail Contact */}
                    <div className="flex items-center space-x-4">
                        <Mail className="text-cyan-400 w-8 h-8" />
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-100">Email Me</h3>
                            <a
                                href="mailto:ifeanyisundayonah25@gmail.com" // Replace with your Gmail
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                ifeanyisundayonah25@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactInfo;