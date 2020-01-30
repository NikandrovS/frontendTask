import React from 'react';

export default function UnitAdd(item) {
    const [count, setCount] = React.useState(
        [
            {value: 1}
        ]
    );
    function add() {
        setCount(
            count.map(count => {
                count.value += 1;
                return count
            })
        );
    }
    function deduct() {
        setCount(
            count.map(count => {
                if (count.value > 1) {
                    count.value -= 1;
                }
                return count
            })
        );
    }
    return (
        <div className="unit-add">
            <div className="count">
                <input type="number" min="0" max="100" value={count[0].value} />
                <div className="stepper">
                    <button className="arrow up" onClick={add}/>
                    <button className="arrow down" onClick={deduct}/>
                </div>
            </div>
            <button className="btn btn_cart" data-product-id={item.id}>В корзину</button>
        </div>
    )
}
