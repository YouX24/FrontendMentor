import React from 'react'
import Card from './components/Card'
import SedanImage from './images/icon-sedans.svg'
import SUVImage from './images/icon-suvs.svg'
import LuxuryImage from './images/icon-luxury.svg'

function App() {
  return (
    <div className="all-cards">
      <Card
        className="sedan-card"
        icon={SedanImage}
        type="sedans"
        description="Choose a sedan for its affordability and execellent fuel economy. Ideal for cruising in the city or on your next road trip"
      />
      <Card
        className="suv-card"
        icon={SUVImage}
        type="suvs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card
        className="luxury-card"
        icon={LuxuryImage}
        type="luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </div>
  )
}

export default App;