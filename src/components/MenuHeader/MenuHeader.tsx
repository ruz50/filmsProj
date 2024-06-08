import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGenres, genersType } from "../../store/slices/GenresSlice";
import './MenuHeader.css'

const MenuHeader = () => {
  const dispatch = useAppDispatch();
  const { genres, isLoad } = useAppSelector((state) => state.genresData);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="genresDiv">
      {isLoad ? (
        <div>Loading...</div>
      ) : (
        genres.map((genre: genersType) => (
          <button key={genre.id} className="genresButton">{genre.name}</button>
        ))
      )}
    </div>
  );
};

export default MenuHeader;
