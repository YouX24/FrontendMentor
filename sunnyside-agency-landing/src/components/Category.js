import React from 'react';

function Category(props) {
    return (
        <div className={props.className}>
            <h4>{props.heading}</h4>
            <p className="category-message">{props.description}</p>
        </div>
    )
}

export default Category;