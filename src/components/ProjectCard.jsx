import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ category, year, title, description, stats, image, bgColor }) => {
  return (
    <div className="w-full flex flex-col md:flex-row group border border-zinc-800 bg-card overflow-hidden">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
        <div>
          <div className="flex justify-between items-center text-xs font-mono text-zinc-500 uppercase tracking-widest mb-12">
            <span>{category}</span>
            <span>{year}</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-white">{title}</h3>
          <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">{description}</p>
        </div>
        
        {/* Massive Stats */}
        <div className="flex gap-8 items-end">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-5xl font-bold tracking-tighter text-[#C3FFFC] leading-none mb-2">{stat.value}</span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column / Image Container */}
      <div className={`w-full md:w-1/2 min-h-[400px] relative overflow-hidden ${bgColor}`}>
        {/* Graphic / Image */}
        <motion.div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-12"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover shadow-2xl" />
          ) : (
            <div className="w-full h-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
              <span className="font-mono text-white/20">PLACEHOLDER</span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
