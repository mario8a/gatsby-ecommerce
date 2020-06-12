import React from 'react';
// import { Link } from 'gatsby';
import CardItem from './CardItem';
import Total from './Total';


export default ({shoppingCart}) => {
    // console.log(shoppingCart);
    return(
        <div className="card">
            <div className="flex items-end">
                <div className="flex-1">
                    <header>
                        <h2 className="text-3xl font-semibold">Mi carrito de compras</h2>
                    </header>
                    <ul>
                    {
                        shoppingCart.map(({sku,producto}) => <CardItem key={sku.id} sku={sku} producto={producto} />)
                    }
                    </ul>
                </div>
                <div className="w-1/3 text-right p-6 font-semibold">

                <Total shoppingCart={shoppingCart} />

                {/* {
                    shoppingCart.map(({sku}) => <Total sku={sku} />)
                } */}
                </div>
            </div>
        </div>
    )
}

// key={sku.id}> {sku.producto.name}