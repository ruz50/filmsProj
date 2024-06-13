import  { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchGenresFilm } from '../../store/slices/GenresfilmSlice'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import './GenresFilms.css'

const genresFilms = () => {
    const {genresid} = useParams()
   const {isLoad,genresFilm} = useAppSelector((state)=>state.genresfilmData)
   const {pageCount} = useAppSelector((state)=>state.filmsData)
   const dispatch  =useAppDispatch()
   useEffect(()=>{
    dispatch(fetchGenresFilm({genresid, pageCount}))
   },[genresid,pageCount])
   
  return (

    <div className="Films">
      {isLoad ? <h2>loading...</h2> : genresFilm.map((el) => (
          <div key={el.id}>
              <p>{el.title}</p>
              <NavLink to={`/films/${el.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={el.title} className="imgNavlink" />
              </NavLink>
             
          </div>
      ))}
      <div className='genresBtn'>
      <Button/>
      </div>
       
      </div>



  )
}

export default genresFilms