import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {addtoCart, addItem} from '../state/actions/shopping_cart';
import AddToCard from './AddToCard';


const AddToCartBtn = ({sku}) => {
    const dispatch = useDispatch();

    const addProductToCart = e => {
        dispatch(addItem(sku));
    }
    return(
        <AddToCard addProduct={addProductToCart} />
    )
}


export default connect(null, {addtoCart})(AddToCartBtn);