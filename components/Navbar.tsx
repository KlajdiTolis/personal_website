import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter text-white">KT.</div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
          <button onClick={() => scrollTo('education')} className="hover:text-white transition-colors">Education</button>
        </div>
        
        <a 
          href="mailto:klajdi.tolis08@gmail.com"
          className="text-sm font-semibold text-white border border-zinc-800 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
