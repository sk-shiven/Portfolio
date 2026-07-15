import React from 'react';

const ExperienceItem = ({ name, role, year }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline group py-6">
      <div className="flex flex-col">
        <h4 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none mb-2">{name}</h4>
        <p className="text-sm md:text-base font-medium text-zinc-400 uppercase tracking-widest">{role}</p>
      </div>
      <div className="mt-4 md:mt-0 font-mono text-sm tracking-widest text-zinc-500 group-hover:text-white transition-colors">
        [{year}]
      </div>
    </div>
  );
};

export default ExperienceItem;
