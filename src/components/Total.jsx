import React from 'react';
// import Price from './Price';

export default ({shoppingCart}) => {
    console.log("Desde total", shoppingCart);

    // const aversi = shoppingCart.map(({sku}) => {
    //     let cantidad = sku.unit_amount
    //     console.log({cantidad});
        
    // });

    // const total = aversi.reduce(
    //     (total,cantidad) => parseInt(cantidad + total)
    // , 0);

    // console.log(total);
    
    // const total = shoppingCart.reduce(
    //     (total, producto) => producto.unit_amount + total
    // ,0)

    // console.log(total);

    // console.log("TOTAL", total);
    return(
        <div>
            <p className="uppercase text-white">Total</p>
            {/* <Price price={total} currency={"MXN"}  className="text-2xl"/> */}
        </div>
    )
}