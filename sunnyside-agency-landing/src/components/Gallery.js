import React from 'react';
import SmallPhotoBlock from './SmallPhotoBlock';

function Gallery() {
    return (
        <div className="gallery">
            <SmallPhotoBlock className="milk"/>
            <SmallPhotoBlock className="plate"/>
            <SmallPhotoBlock className="cone"/>
            <SmallPhotoBlock className="sugar"/>
        </div>
    )
}

export default Gallery;