import React from 'react';
import gradPic from '../assets/grad-pic.jpg.png';

const Welcome = () => {
  return (
    <section id="welcome" className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Column: Headline and Pitch */}
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold bg-portfolio-blue/10 text-portfolio-blue rounded-full border border-portfolio-blue/20">
          Incoming Associate Software Engineer @ Infosys
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          From cloud architecture to interactive frontend logic
        </h1>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
          Welcome to my workspace. I am a software engineer focused on building clean, high-performance applications, interactive frontend systems, and cloud architectures. Explore the tabs above to see my live logic and development work.
        </p>
      </div>
      
      {/*Right column: My actual graduation photo*/}
      <div className = "flex-shrink-0">
        <img
            src={gradPic}
            alt = "Shrivishnu Venkatesan Graduation Photo"
            className="w-72 h-96 object-cover rounded-2xl border border-slate-700 shadow-2xl shadow-portfolio-blue/10"
        />

      </div>
    </section>
  );
};

export default Welcome;