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
                I’m Ifeanyi Onah, a passionate problem-solver combining expertise in Software Engineering and Brand/Advertising Design to create innovative, user-centered solutions. With a background in statistics and hands-on training at Semicolon Africa, I thrive at the intersection of technical execution and creative design.
                </p>

                <p>
                My work focuses on developing impactful software solutions—from streamlining financial systems to crafting engaging, visually appealing digital experiences. I enjoy collaborating in cross-functional environments where code meets creativity to deliver high-quality products.
                </p>

                <p>
                When I’m not coding, I dive into the latest trends in design and technology. I'm currently seeking opportunities to build transformative software products and visually compelling applications.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About