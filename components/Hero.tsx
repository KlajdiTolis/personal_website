import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-6 max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="flex flex-col md:flex-row items-center gap-12 w-full z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <span className="text-zinc-500 font-medium tracking-widest text-sm uppercase">
            Full Stack Developer
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            {PERSONAL_INFO.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-zinc-400 font-light">
            Building scalable digital experiences
          </h2>

          <p className="max-w-xl text-zinc-500 text-lg leading-relaxed mx-auto md:mx-0">
            Specializing in modern React ecosystems, Node.js backends, and mobile development. 
            Currently architecting real-time management platforms and high-performance cloud solutions.
          </p>

          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="p-3 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="p-3 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2"
        >
            <div className="relative w-72 h-80 md:w-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-zinc-800/20 rounded-2xl rotate-3"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
                    <img 
                        src="https://pub-e58096f55dfa45feb1077519be5e37e1.r2.dev/klajdi_image_croped.jpg" 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;