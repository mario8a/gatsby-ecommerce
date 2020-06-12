import React from 'react';
import Price from './Price';

export default ({shoppingCart}) => {
    //PROBLEMA TENGO UN OBJETO CON DOS OBJETOS DENTROS

    const cantidad =  shoppingCart.map(({sku}) => sku.unit_amount);

    const total = cantidad.reduce(
        (total, producto) => producto + total
    , 0);

    return(
        <div>
            <p className="uppercase text-white">Total</p>
            <Price price={total} currency={"MXN"} className="text-2xl" />
        </div>
    )
}