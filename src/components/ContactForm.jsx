import React, { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    formData.append("access_key", "3be84080-d7fe-4c94-b031-eeb49daed2c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl px-4 sm:px-8 py-16">
      <form
        className="flex flex-col gap-12 w-full"
        onSubmit={handleSubmit}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-2 group">
            <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">NAME</label>
            <input
              type="text"
              name="name"
              required
              className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2 group">
            <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">EMAIL</label>
            <input
              type="email"
              name="email"
              required
              className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 group">
          <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase group-focus-within:text-[#C3FFFC] transition-colors">MESSAGE</label>
          <textarea
            rows="4"
            name="message"
            required
            className="bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#C3FFFC] transition-colors resize-none"
          />
        </div>
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-white text-white px-12 py-5 font-mono text-sm tracking-widest uppercase hover:bg-[#C3FFFC] hover:text-black transition-colors duration-150 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SENDING...' : 'SEND ↗'}
          </button>

          {submitStatus === 'success' && (
            <span className="text-emerald-400 font-mono text-sm tracking-widest">
              MESSAGE SENT SUCCESSFULLY!
            </span>
          )}

          {submitStatus === 'error' && (
            <span className="text-rose-400 font-mono text-sm tracking-widest">
              SOMETHING WENT WRONG. PLEASE TRY AGAIN.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
