import React from 'react';

const ToolkitItem = ({ iconUrl, name }) => {
  return (
    <div className="bg-zinc-900 rounded-[2rem] p-8 flex flex-col items-center justify-center aspect-square gap-6 hover:bg-zinc-800 transition-colors cursor-pointer border border-white/5">
      <img src={iconUrl} alt={name} className="w-12 h-12 opacity-80" />
      <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-400 uppercase text-center">{name}</span>
    </div>
  );
};

export default ToolkitItem;
