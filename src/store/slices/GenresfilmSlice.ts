import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import filmsAPI from "../../api/api";
import { FilmsObj } from "./FilmsSlice";

export const fetchGenresFilm  = createAsyncThunk<Array<FilmsObj>,{genresid :string | undefined,pageCount : number}>(
    'fetchGenresFilm',
    async ({genresid,pageCount})=>{
        const res = await filmsAPI.getGenresFilm(genresid,pageCount)
        return res.data.results
    }
)


type GenresInitState = {
    genresFilm : Array<FilmsObj>,
    isLoad : boolean
}

const initialState:GenresInitState = {
    genresFilm : [],
    isLoad : false
}


const GenresfilmSlice = createSlice({
    name:'GenresfilmSlice',
    initialState : initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(
            fetchGenresFilm.pending,(state)=>{
                state.isLoad = true
            }
        )
        .addCase(
            fetchGenresFilm.fulfilled,(state,action:PayloadAction<Array<FilmsObj>>)=>{
                state.genresFilm = action.payload
                state.isLoad = false
            }
        )
    }
})


export default GenresfilmSlice.reducer