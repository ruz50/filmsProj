import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchFilms } from "../../store/slices/FilmsSlice"
import { NavLink } from "react-router-dom"
import './Films.css'
import  Button from "../Button/Button"

const Films = () => {
    const dispatch = useAppDispatch()
    const { films, isLoad, pageCount } = useAppSelector((state) => state.filmsData)
    const {global} = useAppSelector((state)=>state.globalData)

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchFilms({pageCount,global}))
    }, [ global,pageCount])


    return (
        <div className="Films">
            {isLoad ? <h2>loading...</h2> : films.map((el) => (
                <div key={el.id}>
                    <p>{el.title}</p>
                    <NavLink to={`/films/${el.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt={el.title} className="imgNavlink" />
                    </NavLink>
                </div>
            ))}
            <div className="pageChange">
                <Button/>
                </div>
        </div>
    )
}

export default Films
