import React from 'react';
import Price from './Price';
import CheckoutTemp from './CheckoutTemp';

export default ({producto, skus}) => {
    const sku = skus[0];
    return(
        <article className="card">
            <header className="bg-blue-800 p-6 text-center">
                <div className="flex text-left">
                    <div className="flex-1">
                        {
                            producto.images[0] > 0 ?
                            <p>No hay imagen</p>
                            : <img src={producto.images} alt=""/>
                        }
                    </div>
                    <div className="flex-1 px-6">
                        <p>Precio: </p>
                        <Price
                            price={sku.unit_amount}
                            currency={sku.currency}
                            className="text-2xl"
                        />
                    </div>
                </div>
            </header>
            <div className="text-center p-6">
                <h1 className="text-3xl uppercase mb-4"> {producto.name} </h1>
                <CheckoutTemp
                    sku={sku}
                />
            </div>
        </article>
    )
}