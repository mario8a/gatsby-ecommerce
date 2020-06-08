import React from 'react';
import { graphql } from 'gatsby'; 
import Layout from '../components/Layout';
import Products from '../components/Products';


export default (props) => {

    const productos = props.data.allStripeProduct.nodes;

    return(
        <Layout>
            <Products productos={productos} />
        </Layout>
    )
};

//consultas
export const pageQuery = graphql`
    {
      allStripeProduct {
          nodes {
           id
           name
        }
      }
    }
`;