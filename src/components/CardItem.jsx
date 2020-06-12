//Este muestra los elementos del carrito
import React from 'react';
import Price from './Price';

export default ({sku, producto}) => {
    // console.log("PPPP", producto);
    // console.log("SSSS", sku);
    return(
        <div className="p-6 border-b flex">
            <div className="flex-1">
                <p className="font-bold uppercase"> {producto.name} </p>
                <Price  price={sku.unit_amount} className="text-blue-300 mt-1"/>
            </div>
            <div>
                <p className="px-4">0</p>
            </div>
        </div>
    )
}