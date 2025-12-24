import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!projects || projects.length === 0) return null;

  return (
    <div className="mt-8 relative group w-full">
      <div className="relative h-64 md:h-80 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col md:flex-row h-full"
          >
            {/* Image Section */}
            <div className="flex-1 h-2/3 md:h-full overflow-hidden relative">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content Section */}
            <div className="md:w-1/3 p-4 md:p-6 flex flex-col justify-center bg-zinc-950/80 backdrop-blur-sm md:backdrop-blur-none">
              <h4 className="text-lg font-bold text-white mb-2">{projects[currentIndex].title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {projects[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {projects.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 backdrop-blur-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 backdrop-blur-md"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Indicators */}
        {projects.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-4' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;