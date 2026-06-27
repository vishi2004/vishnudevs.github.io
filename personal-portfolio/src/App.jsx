import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome'; // 1. Pulls in your welcome card layout
import AboutMe from './Components/AboutMe'; // 2. Shows the AboutMe content on screen

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white selection:bg-portfolio-blue/20 selection:text-portfolio-blue">
        {/* Top Header Row */}
        <Navbar /> 
        
        {/* Centered Page Layout Grid */}
        <main className="max-w-6xl mx-auto px-4">
          {/* We need to include Routes to tell React which page to go to*/}
          <Routes>
            {/*Home path only shows the Welcome page content*/}
            <Route path="/" element={<Welcome />} />
            {/*About path only shows the AboutMe page content*/}
            <Route path="/About" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;