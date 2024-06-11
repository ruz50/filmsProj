import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import filmsAPI from "../../api/api";

export const fetchGenresFilm  = createAsyncThunk<Array<GenresFilmobj>,{genresid :string | undefined,pageCount : number}>(
    'fetchGenresFilm',
    async ({genresid,pageCount})=>{
        const res = await filmsAPI.getGenresFilm(genresid,pageCount)
        return res.data
    }
)
type GenresFilmobj ={
    title:string
}

type GenresInitState = {
    genresFilm : Array<GenresFilmobj>,
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
            fetchGenresFilm.fulfilled,(state,action:PayloadAction<Array<GenresFilmobj>>)=>{
                state.genresFilm = action.payload
                state.isLoad = false
            }
        )
    }
})


export default GenresfilmSlice.reducer