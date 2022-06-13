import React from 'react';
import Card from './components/Card';
import Avatar from './images/image-avatar.png';
import Ethereum from './images/image-equilibrium.jpg';

function App() {
  return (
    <div>
      <Card
        nftImage={Ethereum}
        avatar={Avatar}
        description="Our Equilibrium collection promotes balance and calm."
        creator="Jules Wyvern"
        nftName="Equilibrium #3429"
        nftPrice="0.041 ETH"
        timeRemaining="3"
      />
    </div>
  )
}

export default App;