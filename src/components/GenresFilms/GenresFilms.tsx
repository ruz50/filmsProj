import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchGenresFilm } from '../../store/slices/GenresfilmSlice'
import { useParams } from 'react-router-dom'

const genresFilms = () => {
    const {genresid} = useParams()
   const {isLoad,genresFilm} = useAppSelector((state)=>state.genresfilmData)
   const {pageCount} = useAppSelector((state)=>state.filmsData)
   const dispatch  =useAppDispatch()
   useEffect(()=>{
    dispatch(fetchGenresFilm({genresid, pageCount}))
   },[])
   console.log(genresFilm);
   
  return (
    <div>{
        isLoad?<h1>Loading...</h1>:
        <div>genresFilm</div>
          
        
        }</div>
  )
}

export default genresFilms