import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="w-full bg-background pt-16 px-4 sm:px-8 border-t border-zinc-900 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        <div className="flex justify-between items-center font-mono text-xs tracking-widest uppercase text-zinc-500">
          <span>© 2026 SHIVEN KATHURIA</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            BACK TO TOP <span className="text-base leading-none">↑</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 overflow-hidden">
          <div className="text-[12rem] md:text-[20rem] leading-[0.7] font-bold tracking-tighter text-white/5 select-none -mb-8">
            SK
          </div>
          <span className="font-mono text-xs tracking-widest uppercase text-zinc-600 pb-2 md:pb-8 whitespace-nowrap">
            © 2026 SHIVEN KATHURIA. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
