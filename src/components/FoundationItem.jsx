import React from 'react';

const FoundationItem = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-4 py-8 border-t border-zinc-900">
      <span className="font-mono text-xs tracking-widest text-zinc-500">{number}</span>
      <h4 className="text-xl font-bold uppercase tracking-tight">{title}</h4>
      <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">{description}</p>
    </div>
  );
};

export default FoundationItem;
