import React from 'react';
import { Link } from 'gatsby';

export default ({producto}) => {
    return(
        <article className="card p-4">
            <header>
                <h2 className="font-bold uppercase text-2xl">
                  <Link to={`/productos/${producto.slug}`}>  {producto.name} </Link>
                </h2>
            </header>
        </article>
    )
}