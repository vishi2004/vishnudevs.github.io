import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side Title */}
        <span className="text-xl font-bold text-white tracking-tight">
          Shrivishnu Venkatesan
        </span>
        
        {/* Centered Navigation Row */}
        <nav className="flex space-x-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-portfolio-blue transition-colors">Welcome</Link>
          <span className="hover:text-portfolio-blue cursor-pointer transition-colors">Dev Lab</span>
          <Link to="/About" className="hover:text-portfolio-blue transition-colors">About Me</Link>
          <span className="hover:text-portfolio-blue cursor-pointer transition-colors">Contact</span>
        </nav>
      </div>
    </header>
  );
};

// Capitalized matching the component declaration name exactly
export default Navbar;