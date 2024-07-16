import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./features/authSlice";

import { loadUserFromCookies } from "./features/authSlice";





const store =  configureStore({
    reducer: {
        auth: authReducer
    }
});

store.dispatch(loadUserFromCookies());


export default store;