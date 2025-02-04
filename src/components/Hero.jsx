// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//         <img src='' alt="" className='mx-auto mb-8 w-48 h-48
//         rounded-full object-cover transform transition-transform duration-300
//         hover:scale-105'/>
//         <h1 className='text-4xl font-bold'>
//             I'm {" "}
//             <span className='text-transparent bg-clip-text
//             bg-gradient-to-r from-green-400 to-blue-500'>Ifeanyi sunday</span>
//             Full-Stack Developer
//         </h1>
//         <p className='mt-4 text-lg text-gray-300 '>
//             I specialize in building modern and responsive web applications.
//         </p>
//         <div className='mt-8 space-x-4'>
//             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//                 transform transition-transform duration-300 hover:scale-105 px-4 py-2
//                 rounded-full'>Contact with me</button>
//             <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
//                 transform transition-transform duration-300 hover:scale-105 px-4 py-2
//                 rounded-full'>Resume</button>
//         </div>
//     </div>
//   )
// }

import { motion } from 'framer-motion';
// import Shakirah from '../assets/Shakirah.JPG'
const Hero = () => (
    <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
            >
                {/* Text Content */}
                <div>
                    <h1 className="text-5xl font-bold mb-6 text-gray-500">
                        Ifeanyi Sunday Onah
                    </h1>
                    <h2 className="text-3xl mb-8 font-light text-slate-500">
                    Software Engineer | Full-Stack Developer | Problem Solver
                    </h2>
                    <p className="text-lg mb-12 text-slate-500 max-w-2xl">
                        I use technology to solve real-world problems, from reducing retail losses to streamlining financial operations.
                        My approach combines <span className="text-teal-500">data-driven insights</span> with <span className="text-teal-500">practical software solutions</span> to create measurable impact.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#contact" // Links to the contact section
                            className="bg-slate-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />

                    {/* Your Image */}
                    <img
                        src={new URL('../assets/', import.meta.url).href}
                        alt="SundayIfeanyi"
                        className="relative rounded-3xl w-full h-auto border-2 border-cyan-500/20"
                    />
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
