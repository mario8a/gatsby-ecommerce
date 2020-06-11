import { ADD_ITEM } from "../actionTypes";

export default function(state = {}, action) {
    if(action.type === ADD_ITEM) {
        return  {shopping_cart: state.shopping_cart.concat([action.payload])};
    }

    return state;
}