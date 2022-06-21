import React from 'react';

function Testimonial(props) {
    return (
        <section className="testimonial">
            <img className="testimonial-img" src={props.img} alt="avatar"/>
            <p className="testimonial-testimonial">{props.testimonial}</p>
            <p className="testimonial-name">{props.name}</p>
            <p className="testimonial-role">{props.role}</p>
        </section>
    )
}

export default Testimonial;