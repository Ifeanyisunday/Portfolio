import React from 'react'
import ecommerce from "../assets/e-commerce.png"
import cbt from "../assets/cbt.png"


const projects = [
    {
        id:1,
        image: ecommerce,
        name: "Mini Bank transaction app",
        technologies: "SpringBoot Java",
        github: "https://github.com/Ifeanyisunday/BankEasyBackend.git"
    },
    {
        id:2,
        image: ecommerce,
        name: "Account management system",
        technologies: "Django python",
        github: "https://github.com/Ifeanyisunday/BankEasyFrontend.git"
    },
    {
        id:3,
        image: cbt,
        name: "JambCBT practise app",
        technologies: "Django python",
        github: "https://github.com/Ifeanyisunday/Cbt_practice_test_app_Backend.git"
    },
    {
        id:4,
        image: ecommerce,
        name: "E-comerce",
        technologies: "Django python",
        github: "https://github.com/Ifeanyisunday/E-commerce-django.git"
    },
    {
        id:4,
        image: ecommerce,
        name: "Contact management",
        technologies: "PHP",
        github: "https://github.com/Ifeanyisunday/contact-management-PHP.git"
    },
    {
        id:5,
        image: ecommerce,
        name: "Task management",
        technologies: "Express js",
        github: "https://github.com/Ifeanyisunday/TaskMangement-expressjs.git"
    },
]

const Backend = () => {
  return (
    <section className='bg-slate-900 text-white py-20' id="projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Back-End Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg
                    hover:shadow-lg transform transition-transform duration-300
                    hover:scale-105'>
                        <img src={project.image} alt='' className="rounded-lg mb-4 w-full h-48 object-cover"/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r
                        from-green-400 to-blue-500 text-white px-4 py-2
                        rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Backend