import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="16" fill="white" className="group-hover:fill-zinc-200 transition-colors" />
        <path 
          d="M30 30V70M30 50L50 30M30 50L50 70M60 30H80M70 30V70" 
          stroke="black" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle cx="85" cy="70" r="4" fill="black" />
      </svg>
      <span className="font-bold text-xl tracking-tighter text-white group-hover:text-zinc-300 transition-colors">
        TOLIS
      </span>
    </div>
  );
};

export default Logo;