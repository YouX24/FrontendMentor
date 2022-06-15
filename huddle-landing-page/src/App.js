import React from 'react';
import Header from './components/Header';
import Illustration from './components/Illustration';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div className="half-half">
        <Illustration/>
        <Information/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;