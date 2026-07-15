import React from 'react';

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-12 w-full max-w-4xl px-4 sm:px-8 py-16" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-2 group">
          <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">NAME</label>
          <input
            type="text"
            name="name"
            className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2 group">
          <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">EMAIL</label>
          <input
            type="email"
            name="email"
            className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 group">
        <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">MESSAGE</label>
        <textarea
          rows="4"
          name="message"
          className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors resize-none"
        />
      </div>
      <div className="pt-8">
        <button
          type="submit"
          className="border border-white text-white px-12 py-5 font-mono text-sm tracking-widest uppercase hover:bg-[#C3FFFC] hover:text-black transition-colors duration-150 rounded-sm"
        >
          SEND ↗
        </button>
      </div>
    </form>
  );
};

export default ContactForm;