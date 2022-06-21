import React from 'react';
import Testimonial from '../components/Testimonial';
import Emily from '../images/image-emily.jpg';
import Thomas from '../images/image-thomas.jpg';
import Jennie from '../images/image-jennie.jpg';

function TestimonialSection() {
    return (
        <section className='client-testimonial'>
            <h3>CLIENT TESTIMONIALS</h3>
            <Testimonial 
                img={Emily}
                testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                name="Emily R."
                role="Marketing Director"
            />
            <Testimonial 
                img={Thomas}
                testimonial="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                name="Thomas S."
                role="Chief Operating Officer"
            />
            <Testimonial 
                img={Jennie}
                testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                name="Jennie F."
                role="Business Owner"
            />
        </section>
    )
}

export default TestimonialSection;