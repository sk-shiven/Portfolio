import React from 'react';

const MegaContactLink = ({ title, href }) => {
  return (
    <a href={href} className="w-full block border-t-2 border-zinc-900 py-12 md:py-16 group last:border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center w-full">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter uppercase text-white group-hover:text-[#C3FFFC] transition-colors duration-300">
          {title}
        </h2>
        <span className="text-4xl md:text-6xl text-white font-light">↗</span>
      </div>
    </a>
  );
};

export default MegaContactLink;
