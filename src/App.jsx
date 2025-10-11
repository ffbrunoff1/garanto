import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import ForWho from './components/ForWho.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ForWho />
        <HowItWorks />
        <Testimonials />
        <About />
        <Services />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
