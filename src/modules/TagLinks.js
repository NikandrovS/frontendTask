import React from 'react';

export default function TagLinks(props) {
    return (
        <div className="product_tags">
            <p>Могут понадобиться:&nbsp;</p>
            { props.links.map((links, index) => {
                return <a href="#" key={index} className="url--link">
                    {(index === props.links.length - 1) ? `${links}.` : `${links},`}
                </a>
            })}
        </div>
    )
}
