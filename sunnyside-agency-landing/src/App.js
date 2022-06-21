import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <InfoSection/>
      <TestimonialSection/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
