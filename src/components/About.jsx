import React from 'react'

const About = () => {
  return (
    // <div className='bg-black text-white py-20' id='about'>
    //     <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    //         <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
    //         <div className='flex flex-col md:flex-row items-center md:space-X-12'>
    //             <img alt=''
    //             className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
    //             <div className='flex-1'>
    //                 <p className='text-lg mb-8'>
    //                 I am a passionate fill-stack developer with a focus on building
    //                 modern and responsible web applications. With a strong foundation 
    //                 in both frontend and backend technologies, i strive to create
    //                 seamless and efficient user experiences.
    //                 </p>
    //                 <div className='space-y-4'>
    //                     <div className='flex item-center'>
    //                         <label htmlFor='htmlandcss' className='w-2/12'>PYTHON</label>
    //                         <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
    //                         transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
    //                     </div>

    //                     <div className='flex item-center'>
    //                         <label htmlFor='htmlandcss' className='w-2/12'>REACT JS</label>
    //                         <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
    //                         transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
    //                     </div>

    //                     <div className='flex item-center'>
    //                         <label htmlFor='htmlandcss' className='w-2/12'>JAVA</label>
    //                         <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
    //                         transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
    //                     </div>  
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='mt-12 flex justify-between text-center'>
    //             <div>
    //                 <h3 className='text-2xl font-bold text-transparent
    //                 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    //                     3+
    //                 </h3>
    //                 <p>Years Experience</p>
    //             </div>

    //             <div>
    //                 <h3 className='text-2xl font-bold text-transparent
    //                 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    //                     50+
    //                 </h3>
    //                 <p>Projects Completed</p>
    //             </div>

    //             <div>
    //                 <h3 className='text-2xl font-bold text-transparent
    //                 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
    //                     10+
    //                 </h3>
    //                 <p>Happy Clients</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                About Me
            </h2>

            <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
                <p>
                    I am Ifeanyi Onah, a passionate problem-solver combining expertise in Brand/Advertising and Software Engineering to create software-driven solutions. With a degree in statistics and intensive training at Semicolon Africa, I bridge technical implementation with business impact.
                </p>

                <p>
                    My work focuses on developing practical solutions to real-world challenges, from financial systems optimization to computer vision applications. I thrive in cross-functional environments where technical excellence meets strategic business understanding.
                </p>

                <p>
                    When not coding, I explore new developments in AI/ML. Currently seeking opportunities to apply my skills in impactful data science roles.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About