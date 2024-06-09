import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import filmsAPI from "../../api/api";

// Define the argument types as objects for both thunks
export const fetchFilms = createAsyncThunk<Array<FilmsObj>, { pageCount: number; global: string }>(
    'films/fetchFilms',
    async ({ pageCount, global }) => {
        const res = await filmsAPI.getFilms(pageCount, global);
        return res.data.results;
    }
);

export const fetchFilm = createAsyncThunk<FilmsObj, { id: string; global: string }>(
    'films/fetchFilm',
    async ({ id, global }) => {
        const res = await filmsAPI.getOne(id, global);
        return res.data;
    }
);

export type FilmsObj = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type FilmsState = {
    films: Array<FilmsObj>;
    isLoad: boolean;
    film: FilmsObj;
    pageCount: number;
};

const initialState: FilmsState = {
    films: [],
    isLoad: false,
    film: {
        adult: false,
        backdrop_path: "",
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    pageCount: 1
};

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState: initialState,
    reducers: {
        changePageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.isLoad = true;
            })
            .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<Array<FilmsObj>>) => {
                state.isLoad = false;
                state.films = action.payload;
            })
            .addCase(fetchFilm.pending, (state) => {
                state.isLoad = true;
            })
            .addCase(fetchFilm.fulfilled, (state , action: PayloadAction<FilmsObj>) => {
                state.isLoad = false;
                state.film = action.payload;
            });
    },
});

export const { changePageCount } = filmsSlice.actions;
export default filmsSlice.reducer;
