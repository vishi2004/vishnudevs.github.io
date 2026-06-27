import React from 'react';
import travelPic1 from '../assets/NYC-Church.jpg';
import travelPic2 from '../assets/Statue-of-Liberty.jpg';
import runningPic from '../assets/5k-Run-Time.jpg';


const AboutMe = () => {
    return (
        <section id="AboutMe" className="w-full bg-slate-900 py-16 md:py-24 text-white">
            {/* Left column of page */}
            <div className="flex-1 space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    An Overview
                </h1>

                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    I am Shrivishnu, a recent UConn Graduate looking to start my career as an Associate Software Engineer. Over my four years of college, I have built a strong engineering foundation by developing diverse projects, ranging from interactive 2D games to real-world applications like a serverless auction platform using AWS services. Through these hands-on experiences, I have developed core strengths in backend development, REST APIs, and cloud technologies. Outside of software engineering, I am passionate about traveling. I frequently visit New York City and have recently explored both Houston and San Antonio, Texas. I am also dedicated to fitness and personal wellbeing as an avid runner; I firmly believe that staying active is one of the ultimate keys to a healthy, happy life.
                </p>

                {/*Right column: All my photos (traveling and runnning)*/}
                <div className = "w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-4 flex-shrink-0">
                    <img
                        src={travelPic1}
                        alt = "New York Church Photo"
                        className="w-72 h-96 object-cover rounded-2xl border border-slate-700 shadow-2xl shadow-portfolio-blue/10"
                    />

                    <img
                        src={travelPic2}
                        alt = "Statue of Liberty"
                        className="w-72 h-96 object-cover rounded-2xl border border-slate-700 shadow-2xl shadow-portfolio-blue/10"
                    />
                    
                    <img
                        src={runningPic}
                        alt="Running Picture"
                        className="w-72 h-96 object-cover rounded-2xl border border-slate-700 shadow-2xl shadow-portfolio-blue/10"
                    />
                </div>
                
            </div> 
        </section>
    )
}

export default AboutMe; 