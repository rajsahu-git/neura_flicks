import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";
import MovieSlice from "./MovieSlice";


const Store = configureStore({
    reducer: {
        authentication:AuthenticationSlice,
        movies:MovieSlice,
    }
})

export default Store