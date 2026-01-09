import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white border-l-4 border-white pl-4 mb-4">
            Technical Skills & AI Stack
          </h2>
          <p className="text-zinc-500 max-w-2xl ml-5">
            A comprehensive overview of my technical toolkit, from core frontend technologies and backend systems to cutting-edge AI-assisted development workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-all duration-300 group shadow-lg flex flex-col"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-4 group-hover:text-zinc-300 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 text-[11px] font-medium text-zinc-400 bg-zinc-900/50 rounded border border-zinc-800/50 hover:border-zinc-500 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;