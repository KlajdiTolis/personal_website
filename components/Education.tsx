import React from 'react';
import { EDUCATION, CERTIFICATIONS, PERSONAL_INFO } from '../constants';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div className="space-y-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="text-white" size={28} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </motion.div>

            <div className="space-y-8 border-l border-zinc-800 ml-3.5 pl-8">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-black" />
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-zinc-400 mt-1">{edu.school}</p>
                  <p className="text-zinc-500 text-sm mt-2 font-mono">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Languages className="text-white" size={28} />
              <h2 className="text-2xl font-bold text-white">Languages</h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 ml-5">
              {PERSONAL_INFO.languages?.map((lang, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center max-w-xs border-b border-zinc-900 pb-2"
                >
                  <span className="text-zinc-300 font-medium">{lang.name}</span>
                  <span className="text-zinc-500 text-sm italic">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-8"
          >
            <Award className="text-white" size={28} />
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </motion.div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-colors"
              >
                <p className="text-zinc-300 font-medium">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;