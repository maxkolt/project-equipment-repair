import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Advantages from './components/Advantages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <div><Hero /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Brands /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Advantages /></div>
      <div data-aos="fade-up" data-aos-delay="100"><ContactForm /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
