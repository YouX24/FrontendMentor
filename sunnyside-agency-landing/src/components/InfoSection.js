import React from 'react';
import InfoBlock from '../components/InfoBlock';
import PhotoBlock from '../components/PhotoBlock';
import Category from '../components/Category';

function InfoSection() {
    return (
        <section className="info-section">
            <PhotoBlock className="egg"/>
            <InfoBlock 
                className="info-egg-block"
                header="Transform your brand" 
                info="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                link=""
                underline="info-yellow-underline"
            />
            <PhotoBlock className="cup"/>
            <InfoBlock
                className="info-orange-block"
                header="Stand out to the right audience" 
                info="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                link=""
                underline="info-pink-underline"
            />
            <Category
                className="cherry"
                heading="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention."
            />
            <Category
                className="orange"
                heading="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improves your business image."
            />
        </section>
    )
}

export default InfoSection;