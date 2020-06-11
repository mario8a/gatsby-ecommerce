import React, { Fragment } from 'react';
import SEO from './SEO';
import NavConnected from './NavConnected';

export default (props) => {
    return(
        <Fragment>
            <SEO/>
            <NavConnected/>
            <main className="max-w-4xl mx-auto">
                {props.children}
            </main>
        </Fragment>
    )
}

/**props.children es un arreglo con todos los elementos hijos
 * del componente que se esta creando
 */

/**mx-auto agrega margen a todos los lados
 * max-w-4xl ancho maximo
 */


// import React from 'react';

// export default (props) => {
//     return(
//         <div>
            
//         </div>
//     )
// }