import React from 'react';

const CompetencyAccordion = ({ icon: Icon, title }) => {
  return (
    <div className="w-full border-t border-zinc-900 py-8 md:py-12 flex items-center gap-8 group cursor-pointer last:border-b">
      <div className="text-white group-hover:text-[#C3FFFC] transition-colors duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-white group-hover:text-[#C3FFFC] transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

export default CompetencyAccordion;
