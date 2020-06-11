import { createStore, compose } from "redux"
import shopping_cart from "./reducers/shopping_cart";


export default () => createStore(
    shopping_cart,
    {shopping_cart: []},
    compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    )
    ); 