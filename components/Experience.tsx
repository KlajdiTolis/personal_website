import React from 'react';
import { EXPERIENCES } from '../constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-white border-l-4 border-white pl-4"
      >
        Featured Projects & Experience
      </motion.h2>

      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-20">
        {EXPERIENCES.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-zinc-800 group-hover:bg-white transition-colors duration-300" />

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-3">
                  {job.company}
                  {job.url && (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors" aria-label={`Link to ${job.company}`}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </h3>
                <p className="text-zinc-400 font-medium text-lg mt-1">{job.role}</p>
              </div>
            </div>

            <div className="text-zinc-400 leading-relaxed mb-6 space-y-2">
              {job.description.map((desc, i) => (
                <p key={i} className="flex items-start">
                  <span className="mr-2 mt-2 w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0" />
                  {desc}
                </p>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {job.techStack?.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Showcase Carousel */}
            {job.projects && job.projects.length > 0 && (
              <ProjectCarousel projects={job.projects} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;