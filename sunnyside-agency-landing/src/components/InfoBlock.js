import React from 'react';

function InfoBlock(props) {
    return (
        <section className="info-block">
            <div className="info-center">
                <h3 className="info-heading">{props.header}</h3>
                <p className="info-message">{props.info}</p>
                <div className="info-learn-more">
                    <div className={props.underline}>
                        <a className="info-learn" href={props.link}>LEARN MORE</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoBlock;