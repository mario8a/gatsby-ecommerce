import React from 'react';
import ProductCard from './ProductCard';

export default ({productos}) => {
    return(
        <div>
             {
                 productos.map((producto) => (
                     <ProductCard producto={producto} key={producto.id}>
                         {producto.name}
                     </ProductCard>
                 ))
             }
        </div>
    )
}