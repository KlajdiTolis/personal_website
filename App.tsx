import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
