import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";


const Store = configureStore({
    reducer: {
        authentication:AuthenticationSlice,
    }
})

export default Store