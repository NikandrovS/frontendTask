import React, {useContext} from 'react';
import Context from "../context";

export default function ProductPrice(item) {
    const {altPrice, commonPrice} = useContext(Context);
    
    function priceFix(oldPrice) {
        return oldPrice.toFixed(2).replace(".",",");
    }
    
    return(
        <div className="product_price">
            <p className="product_price_club_card">
                <span className="product_price_club_card_text">
                    По карте <br/> клуба
                </span>
                    {item.alt ? (
                        <span className="price priceGoldAlt">{priceFix(item.priceGoldAlt)}</span>
                    ) : (
                        <span className="price goldPrice">{priceFix(item.priceGold)}</span>
                    )}
                <span className="black__i">&nbsp;&#8381;</span>
            </p>
            <p className="product_price_default">
                {item.alt ? (
                    <span className="price priceRetailAlt">{priceFix(item.priceRetailAlt)}</span>
                ) : (
                    <span className="price retailPrice">{priceFix(item.priceRetail)}</span>
                )}
                <span className="black__i">&nbsp;&#8381;</span>
            </p>
            <span className="product_price_points">
                {(item.bonuses === 0) ? ('Нельзя оплатить баллами') : ('Можно купить за ' + item.bonuses + ' балл.')}
            </span>
            <div className="unit--wrapper">
                <div className={`unit--select ${((!item.alt) ? 'unit--active' : '')}`} onClick={() => commonPrice(item.id)}>
                    <p >{
                        (item.fullAlt === "штука") ? ('За штуку') :
                        (item.fullAlt === "метр квадратный") ? ('За м. кв.') :
                        (item.fullAlt === "упаковка") ? ('За упаковку') :
                        (item.fullAlt === "упак.") ? ('За упаковку') :
                        (item.fullAlt === "Метр кубический") ? ('За м. куб.') :
                        (item.fullAlt === "комплект") ? ('За комлпект') :
                        ('За м. кв.')}
                    </p>
                </div>
                <div className={`unit--select ${((item.alt) ? 'unit--active' : '')}`} onClick={() => altPrice(item.id)}>
                    <p>{
                        (item.unit === "метр квадратный") ? ('За м. кв.') :
                        (item.unit === "упаковка") ? ('За упаковку') :
                        (item.unit === "упак.") ? ('За упаковку') :
                        (item.unit === "Метр кубический") ? ('За м. куб.') :
                        (item.unit === "комплект") ? ('За комлпект') :
                        (item.unit === "метр погонный") ? ('За м. погон.') :
                        ('За штуку')}
                    </p>
                </div>
            </div>
        </div>
    )
}
