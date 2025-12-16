import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-zinc-500 max-w-lg mb-8">
          Open to new opportunities and collaborations. Feel free to reach out via email or connect on LinkedIn.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors mb-12"
        >
          <Mail className="mr-2" size={20} />
          Send me an email
        </a>

        <div className="flex gap-6 mb-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="text-zinc-700 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
