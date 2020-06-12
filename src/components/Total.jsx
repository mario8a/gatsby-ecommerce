import React from 'react';
import Price from './Price';

export default ({shoppingCart}) => {
    //PROBLEMA TENGO UN OBJETO CON DOS OBJETOS DENTROS

    const total = shoppingCart.reduce(
        (total, product)=> (product.prunit_amountice * product.quantity) + total
      , 0)
    return(
        <div>
            <p className="uppercase text-white">Total</p>
            <Price price={total} currency={"MXN"} className="text-2xl" />
        </div>
    )
}