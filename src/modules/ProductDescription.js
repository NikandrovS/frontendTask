import React from 'react';
import TagLinks from "./TagLinks";

export default function ProductDescription(item) {
    function fixTitle(title) {
        return (title.split('(')[0])
    }

    function separateLinks(fullString) {
        let newArray = fullString.split(`;`);
        newArray.pop();
        return newArray;
    }
    return (
        <div className="product_description">
            <div className="status">
                <span className="product_code">Код: {Number(item.code)}</span>
                <span className="product_status">{item.status ? ('Наличие') : ('Нет в наличии')}</span>
            </div>
            <a href="#" className="product_link">{fixTitle(item.title)}</a>
            {item.assocProducts.length ? (
                <TagLinks links={separateLinks(item.assocProducts)} />
            ) : (
                <br/>
            )}
        </div>
    )
}
