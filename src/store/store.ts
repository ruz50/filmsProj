import { configureStore } from "@reduxjs/toolkit";
import GenresSlice from './slices/GenresSlice';
import FilmsSlice from "./slices/FilmsSlice";

const store = configureStore({
    reducer: {
        genresData: GenresSlice,
        filmsData: FilmsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
