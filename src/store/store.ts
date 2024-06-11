import { configureStore } from "@reduxjs/toolkit";
import GenresSlice from './slices/GenresSlice';
import FilmsSlice from "./slices/FilmsSlice";
import globalSlice from "./slices/globalSlice";
import GenresfilmSlice from "./slices/GenresfilmSlice";

const store = configureStore({
    reducer: {
        genresData: GenresSlice,
        filmsData: FilmsSlice,
        globalData : globalSlice,
        genresfilmData : GenresfilmSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
