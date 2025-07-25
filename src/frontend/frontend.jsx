import React from 'react'
import ecommerce from "../assets/e-commerce.png"
import cal from "../assets/calculator.png"
import cbt from "../assets/cbt.png"
import podcast from "../assets/podcast.png"
import movie from "../assets/movie.png"
import news from "../assets/news.png"
import fb from "../assets/fb.png"
import PageTransition from '../components/Transition'


const projects = [
    {
        id:1,
        image: podcast,
        name: "African Podcast",
        technologies: "React",
        github: "https://african-podcast-next.vercel.app/"
    },
    {
        id:2,
        image: ecommerce,
        name: "Account management system",
        technologies: "HTML,CSS, REACT, TAILWIND",
        github: "https://github.com/Ifeanyisunday/AMSS-frontend.git"
    },
    {
        id:3,
        image: fb,
        name: "Facebook clone",
        technologies: "React Vite",
        github: "https://github.com/Ifeanyisunday/facebook-demo-app-react.git"
    },
    {
        id:4,
        image: news,
        name: "Global News website",
        technologies: "React Vite",
        github: "https://github.com/Ifeanyisunday/News-Website.git"
    },
    {
        id:5,
        image: movie,
        name: "Movie DB",
        technologies: "React",
        github: "https://github.com/Ifeanyisunday/Moviedb.git"
    },
    {
        id:6,
        image: cbt,
        name: "CBT-test application",
        technologies: "React",
        github: "https://github.com/Ifeanyisunday/CBT-TEST-app-fronend.git"
    },
    {
        id:7,
        image: cal,
        name: "Casio calculator",
        technologies: "React",
        github: "https://github.com/Ifeanyisunday/AMSS-frontend.git"
    },
]

const Frontend = () => {
  return (
   <PageTransition>
    <section className='bg-slate-900 text-white py-20' id="projects">
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Front-End Projects</h2>
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
                        rounded-full' target='_blank' rel='noopener noreferrer'>Project Link</a>
                    </div>
                ))}

            </div>
        </div>
    </section>
    </PageTransition> 
  )
}

export default Frontend