import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {addtoCart, addItem} from '../state/actions/shopping_cart';
import AddToCard from './AddToCard';


const AddToCartBtn = ({sku,producto}) => {
    const dispatch = useDispatch();

    const addProductToCart = e => {
        dispatch(addItem({sku,producto}));
    }
    return(
        <AddToCard addProduct={addProductToCart} />
    )
}


export default connect(null, {addtoCart})(AddToCartBtn);