import React from 'react';

export default function UnitDescription(item) {
    return (
        <div className="unit--desc">
            <div className="unit--desc-i"/>
            <div className="unit--desc-t">
                <p>Продается упаковками:</p>
                <p>{item.unitRatio} {item.unit} &#61; {item.unitRatioAlt} {item.unitAlt}</p>
            </div>
        </div>
    )
}
