import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github} from 'lucide-react';

const Navbar = () => (
    // <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    //     <div className='container py-2 flex justify-center md:justify-between items-center'>
    //         <div>
    //             <div className='text-2xl font-bold hidden md:inline'>Ifeanyi</div>
    //             <div className='space-x-6'>
    //                 <a href='#home' className='hover:text-gray-400'>Home</a>
    //                 <a href='#home' className='hover:text-gray-400'>About me</a>
    //                 <a href='#home' className='hover:text-gray-400'>Services</a>
    //                 <a href='#home' className='hover:text-gray-400'>Projects</a>
    //                 <a href='#home' className='hover:text-gray-400'>Contact</a>
    //             </div>
    //             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
    //             transform transition-transform duration-300 hover:scale-105 px-4 py-2
    //             rounded-full'>Connect Me</button>
    //         </div>
    //     </div>
    // </nav>

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
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex gap-4 ml-4">
                        <a href="https://www.linkedin.com/in/shakira-hibatullahi-333126293/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                        <a href="https://github.com/HibatullahiShakira" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 hover:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </motion.nav>
  )

export default Navbar