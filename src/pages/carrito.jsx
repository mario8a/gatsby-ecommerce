import React from 'react';
import Layout from '../components/Layout';
import { shallowEqual, useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
//shallowEqual es una funcion de comparacion
export default (props) => {

    const shoppingCart = useSelector(state => state.shopping_cart, shallowEqual);

    return(
        <Layout>
            <ShoppingCart
                shoppingCart={shoppingCart}
            />
        </Layout>
    )
}