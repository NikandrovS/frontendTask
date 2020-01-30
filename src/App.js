import React from 'react';
import Context from './context';
import productList from './products';
import Product from './modules/Product';

function App() {
    const [items, setItems] = React.useState(
        productList
    );

    function altPrice(id) {
        setItems(
            items.map(item => {
                if (item.productId === id) {
                    item.hasAlternateUnit = true;
                }
                return item
            })
        );
    }
    function commonPrice(id) {
        setItems(
            items.map(item => {
                if (item.productId === id) {
                    item.hasAlternateUnit = false;
                }
                return item
            })
        );
    }

    return (
        <Context.Provider value={{altPrice, commonPrice}}>
            <div className="content">
                { items.map((items, index) => {
                    return <Product items={items} key={index}/>
                })}
            </div>
        </Context.Provider>
    );
}

export default App;
