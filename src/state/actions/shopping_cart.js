import { ADD_ITEM } from "../actionTypes"
//actions creators
//funciones que retornan acciones


/**
 * {type: '', payload: {}}
 */

export const addItem = (product) => {
    return {
        type : ADD_ITEM,
        payload: product
    }
}