import React from 'react';
import { motion } from 'framer-motion';

const ArticleRow = ({ number, date, readTime, title, subtitle, disabled = false, href = '#' }) => {
  const content = (
    <div className={`w-full grid grid-cols-1 md:grid-cols-12 gap-4 py-8 px-8 items-center border-b border-zinc-900 group ${disabled ? 'opacity-50' : 'cursor-pointer hover:bg-white/[0.02] transition-colors'}`}>
      
      {/* Left Metadata */}
      <div className={`col-span-1 md:col-span-3 flex flex-row md:flex-col justify-between font-mono text-xs tracking-widest uppercase ${disabled ? 'text-zinc-600' : 'text-zinc-500'}`}>
        <span>{number}</span>
        <div className="flex flex-row md:flex-col gap-4 md:gap-1 mt-0 md:mt-4">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
        <h3 className={`text-2xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${disabled ? 'text-zinc-600' : 'text-white group-hover:text-[#C3FFFC]'}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-sm md:text-base ${disabled ? 'text-zinc-700' : 'text-zinc-400'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Action */}
      <div className="col-span-1 md:col-span-2 flex justify-end font-mono text-xs tracking-widest uppercase">
        {disabled ? (
          <span className="text-zinc-700">COMING SOON</span>
        ) : (
          <span className="text-zinc-400 group-hover:text-white transition-colors">READ +</span>
        )}
      </div>
      
    </div>
  );

  if (disabled) {
    return content;
  }

  return (
    <a href={href} className="block w-full">
      {content}
    </a>
  );
};

export default ArticleRow;
