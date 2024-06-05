import { configureStore } from "@reduxjs/toolkit";
import GenresSlice from "./slices/GenresSlice";


const store = configureStore({
    reducer:{
        genersData : GenresSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store 