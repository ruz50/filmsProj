import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGenres, genersType } from "../../store/slices/GenresSlice";
import './MenuHeader.css'
import { fetchGenresFilm } from "../../store/slices/GenresfilmSlice";
import { NavLink, useParams } from "react-router-dom";

const MenuHeader = () => {
  const dispatch = useAppDispatch();
  const { genres, isLoad } = useAppSelector((state) => state.genresData);
  const {global} = useAppSelector((state)=>state.globalData)
  useEffect(() => {
    dispatch(fetchGenres(global));
  }, [global]);

  return (
    <div className="genresDiv">
      {isLoad ? (
        <div>Loading...</div>
      ) : (
        genres.map((genre: genersType) => (
          <NavLink to={`${genre.id}`}>
          <button key={genre.id} className="genresButton" >{genre.name}</button>
          </NavLink>
        ))
      )}
    </div>
  );
};

export default MenuHeader;
