import { configureStore } from "@reduxjs/toolkit";
import { roundReducer } from "./round";

const store = configureStore({
    reducer: {
        round: roundReducer
    },
    devTools: true,
})

export default store;