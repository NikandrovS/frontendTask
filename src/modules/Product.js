import React from 'react';
import ProductPhoto from "./ProductPhoto";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import UnitDescription from "./UnitDescription";
import UnitAdd from './UnitAdd';

export default function Product(props) {
    return (
        <div className="product">
            <ProductPhoto url={props.items.primaryImageUrl}/>
            <ProductDescription
                code={props.items.code}
                status={props.items.isActive}
                title={props.items.title}
                assocProducts={props.items.assocProducts}
            />
            <div className="order_info">
                <ProductPrice
                    id={props.items.productId}
                    alt={props.items.hasAlternateUnit}
                    priceGoldAlt={props.items.priceGoldAlt}
                    priceGold={props.items.priceGold}
                    priceRetailAlt={props.items.priceRetailAlt}
                    priceRetail={props.items.priceRetail}
                    bonuses={props.items.bonusAmount}
                    fullAlt={props.items.unitFullAlt}
                    unit={props.items.unit}
                />
                <UnitDescription
                    unitRatio={props.items.unitRatio}
                    unit={props.items.unit}
                    unitRatioAlt={props.items.unitRatioAlt}
                    unitAlt={props.items.unitAlt}
                />
                <UnitAdd id={props.items.productId}/>
            </div>
        </div>
    )
}
