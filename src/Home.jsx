import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero_section';
import Main from './components/Main';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
    </div>
  )
}

export default Home