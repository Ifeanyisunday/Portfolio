import React from 'react'
import ecommerce from "../assets/e-commerce.png"
import eid from "../assets/eid.png"
import { Link } from 'react-router-dom'

const projects = [
    {
        id:1,
        image: eid,
        name: "Still and Motion Designs",
        technologies: "Adobe suites",
        explore: '/designs'
    },
    {
        id:2,
        image: ecommerce,
        name: "Front-end projects",
        technologies: "React",
        explore: '/frontend'
    },
    {
        id:3,
        image: ecommerce,
        name: "Back-end Projects",
        technologies: "Django + java",
        explore: '/backend'
    },
]

const Projects = () => {
  return (
    <section className='bg-slate-900 text-white py-20' id="projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg
                    hover:shadow-lg transform transition-transform duration-300
                    hover:scale-105'>
                        <img src={project.image} alt='' className="rounded-lg mb-4 w-full h-48 object-cover"/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <Link to={project.explore} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2
                        rounded-full' target='_blank' rel='noopener noreferrer'>View all</Link>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Projects