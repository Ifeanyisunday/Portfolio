import { motion } from 'framer-motion';

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
                    <h1 className="text-5xl font-bold mb-6 text-gray-600">
                        Ifeanyi Sunday Onah
                    </h1>
                    <h2 className="text-3xl mb-8 font-light text-slate-500">
                    Software Engineer | Full-Stack Developer | Designer | Problem Solver
                    </h2>
                    <h3 className='text-slate-600'>💡 Turning complex challenges into impactful solutions through technology.</h3><br />
                    <p className="text-lg mb-12 text-slate-600 max-w-2xl">
                    🔧 I specialize in leveraging data-driven insights and practical software engineering to solve real-world problems. 
                    From optimizing processes to building scalable applications, 
                    I focus on creating solutions that deliver measurable results and elevate user experiences.
                    Let’s connect and build impactful technology together!
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
                    <div className="absolute ml-50 mt-5 w-[380px] inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />

                    {/* Your Image */}
                    <img
                        src={new URL('../assets/ify2.jpg', import.meta.url).href}
                        alt="SundayIfeanyi"
                        className="relative ml-50 mt-5 rounded-3xl w-[380px] h-[500px] border-2 border-cyan-500/20"
                    />
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
