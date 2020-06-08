import React, { Fragment } from 'react';
import Nav from './Nav';
import SEO from './SEO';

export default (props) => {
    return(
        <Fragment>
            <SEO/>
            <main>
                <Nav/>
                {props.children}
            </main>
        </Fragment>
    )
}

/**props.children es un arreglo con todos los elementos hijos
 * del componente que se esta creando
 */


// import React from 'react';

// export default (props) => {
//     return(
//         <div>
            
//         </div>
//     )
// }