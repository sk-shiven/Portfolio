import React from 'react';

const LabCard = ({
  number = "001",
  title = "Piecewise Linear Reg. Model",
  description = " A dataset-agnostic machine learning model featuring a scikit-learn compatible object-oriented API for multi-dimensional linear spline regressions.",
  tags = ["Python", "Scikit-Learn", "Stats"],
  highlighted = true,
  githubLink = 'https://github.com/sk-shiven/Piecewise-LR-Model'
}) => {
  const bgClass = highlighted ? "bg-[#C3FFFC]" : "bg-zinc-900";
  const textClass = highlighted ? "text-[oklch(15%_0.02_250)]" : "text-white";
  const tagBorderClass = highlighted ? "border-black/20" : "border-white/20";

  return (
    <div className={`w-full ${bgClass} ${textClass} px-8 py-12 md:py-20 group cursor-pointer border border-zinc-900 transition-colors mb-4 last:mb-0`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left Side: Number & Tags */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <span className="text-sm font-mono tracking-widest font-bold">{number}</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className={`text-xs font-mono border ${tagBorderClass} px-2 py-1 uppercase rounded-sm`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Center: Title & Description */}
        <div className="flex flex-col w-full md:w-2/4">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">{title}</h3>
          <p className="text-lg md:text-xl font-medium opacity-80 max-w-lg leading-snug">
            {description}
          </p>
        </div>

        {/* Right: Action */}
        <div className="w-full md:w-1/4 flex justify-start md:justify-end">
          <a href={githubLink} target="_blank" rel="noreferrer" className="font-mono text-sm tracking-widest font-bold uppercase hover:opacity-70 transition-opacity flex items-center gap-2">
            GITHUB <span className="text-xl leading-none">↗</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default LabCard;
