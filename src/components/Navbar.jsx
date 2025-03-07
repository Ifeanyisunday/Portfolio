import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-slate-900 backdrop-blur-sm z-50 shadow-xl"
    >
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-200">Sunday Ifeanyi</span>
                <div className="flex items-center gap-8 text-gray-300">
                    {["Skills", "Projects", "Experience", "Contact"].map((item) => (
                        <Link
                            key={item}
                            to={"/{item.toLowerCase()}"}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex gap-4 ml-4">
                        <a href="https://www.linkedin.com/in/sunday-ifeanyi/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                        <a href="https://github.com/Ifeanyisunday" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.nav>
)

export default Navbar