import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
 
import initialState from "./store";
import reducers from "./reducers";

const UserProvider = ({children}) => {
    const store = createStore(reducers, initialState);
    return <Provider store={store} >{children}</Provider>  
}

export default UserProvider;