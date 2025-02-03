import {useAppSelector } from '../../store/hooks'

const GenresFilm = () => {
    const {genresFilm,isLoad}=useAppSelector((state)=>state.genresfilmData)
    
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