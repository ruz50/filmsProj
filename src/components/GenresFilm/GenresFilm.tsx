import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const GenresFilm = () => {
    const dispatch =useAppDispatch()
    const {genresFilm,isLoad}=useAppSelector((state)=>state.genresfilmData)
    console.log(genresFilm);
    
  return (
    <div>
        {
          isLoad?<h1>Loading...</h1>:
            genresFilm.map((el)=>{
                return <div>{el.title}</div>
            })
        }
    </div>
  )
}

export default GenresFilm