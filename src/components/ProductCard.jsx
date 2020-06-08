import React from 'react';

export default ({producto}) => {
    return(
        <article className="card p-4">
            <header>
                <h2 className="font-bold uppercase text-2xl"> {producto.name} </h2>
            </header>
        </article>
    )
}