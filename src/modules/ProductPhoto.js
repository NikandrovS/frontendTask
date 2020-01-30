import React from 'react';

export default function ProductPhoto(item) {
    function concatUrl(url) {
        return `https:${url.slice(0, -4)}_220x220_1${url.slice(-4)}`
    }
    
    return(
        <div className="product_photo">
            <a href="#">
                <img  src={concatUrl(item.url)} alt="product_img" height="160" width="160"/>
            </a>
        </div>
    )
}
