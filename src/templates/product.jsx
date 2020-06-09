import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Product from '../components/Product';

export default (props) => {
    const producto = props.data.stripeProduct
    const skus = props.data.allStripePrice.nodes
    // console.log(props);
    return(
       <Layout>
           <Product 
                producto={producto} 
                skus={skus}
                />
       </Layout>
    )
}

export const pageQuery = graphql`
    query($id : String) {
        stripeProduct(id: { eq: $id }){
            name
            slug
            images
        }
        allStripePrice(filter: {product: {eq: $id}}) {
            nodes {
                product
                currency
                unit_amount
                unit_amount_decimal
                created
                id
            }
        }
    }
`