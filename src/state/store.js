import { createStore, compose } from "redux"


export default () => createStore(
    (state) => state,
    {hola: "Hola mundo"},
    compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    )
    ); 