import React from 'react'
import ecommerce from "../assets/e-commerce.png"
import eid from "../assets/eid.png"


const projects = [
    {
        id:1,
        image: eid,
        name: "Still Designs",
        technologies: "Adobe suites",
        Google: "https://drive.google.com/drive/folders/1TdFjkPRek0klHLG60YFR0YQiuW_i_pnD?usp=drive_link"
    },
    {
        id:2,
        image: ecommerce,
        name: "Motion Designs",
        technologies: "Adobe suites",
        Google: "https://drive.google.com/drive/folders/1fCCHZX_O3EPPMG49p437CBzqID-Ut2hd?usp=drive_link"
    },
]

const Designs = () => {
  return (
    <section className='bg-slate-900 text-white py-20' id="projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Design Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg
                    hover:shadow-lg transform transition-transform duration-300
                    hover:scale-105'>
                        <img src={project.image} alt='' className="rounded-lg mb-4 w-full h-48 object-cover"/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.Google} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2
                        rounded-full' target='_blank' rel='noopener noreferrer'>Google Drive</a>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Designs
