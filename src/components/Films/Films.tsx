import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchFilms } from "../../store/slices/FilmsSlice"

const Films = () => {
    const dispatch = useAppDispatch()
    const {films,isLoad}= useAppSelector((state)=>state.filmsData)
    useEffect(()=>{
        dispatch(fetchFilms())
    },[])

  return (
    <div>{
        isLoad?<h2>loading...</h2>:films.map((el)=>{
            return <div>
                <div>{el.title}</div>
                <img src={el.poster_path} alt="" />
            </div>
        })
    }</div>
  )
}

export default Films