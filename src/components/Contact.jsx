import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contacts = () => (
    <section id="contact" className="py-20 bg-cyan-500">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-cyan-100">
                    Get in Touch
                </h2>

                <div className="space-y-6 text-center">
                    <div>
                        <p className="text-gray-300 mb-4">
                            Looking a software engineering internship opportunities
                        </p>
                        <a
                            href="https://docs.google.com/document/d/18upI43x6LZlJS8u7YqjzXbYdEY362saB91Cq9KeEfoo/edit?tab=t.0" // Replace with your actual CV URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-500 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
                        >
                            View Full CV
                        </a>
                    </div>

                    <div className="pt-8 border-t border-slate-600">
                        <p className="text-gray-300">
                            Connect via{' '}
                            <a
                                href="https://www.linkedin.com/in/sunday-ifeanyi/"
                                className="text-cyan-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>{' '}
                            or explore code on{' '}
                            <a
                                href="https://github.com/Ifeanyisunday"
                                className="text-cyan-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contacts