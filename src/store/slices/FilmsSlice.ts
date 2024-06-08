import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import filmsAPI from "../../api/api";

export const fetchFilms = createAsyncThunk<Array<FilmsObj>>(
    'films/fetchFilms',
    async () => {
        const res = await filmsAPI.getFilms();
        return res.data.results
    }
);

type FilmsObj ={
    adult:boolean
    backdrop_path:string
    id:number
    original_language:string
    original_title:string
    overview:string
    popularity:number
    poster_path:string
    release_date:string
    title:string
    video:boolean
    vote_average:number
    vote_count:number
}


type FilmsState = {
    films: Array<FilmsObj>;
    isLoad: boolean;
};

const initialState: FilmsState = {
    films: [],
    isLoad: false,
};


const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isLoad = true;
        });
        builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<Array<FilmsObj>>) => {
            state.isLoad = false;
            state.films = action.payload;
        });
    },
});

export default filmsSlice.reducer;
