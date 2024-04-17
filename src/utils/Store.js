import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";
import GptSearchSlice from "./GptSearchSlice";
import MovieSlice from "./MovieSlice";


const Store = configureStore({
    reducer: {
        authentication:AuthenticationSlice,
        movies:MovieSlice,
        gpt:GptSearchSlice,
    }
})

export default Store