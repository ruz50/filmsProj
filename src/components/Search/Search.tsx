import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchSearch } from '../../store/slices/FilmsSlice';
import './Search.css'

const Search = () => {
    const dispatch = useAppDispatch();
    const { search, searchFilms } = useAppSelector((state) => state.filmsData);

    useEffect(() => {
        if (search.length > 3) {
            dispatch(fetchSearch(search));
        }
    }, [search, dispatch,searchFilms]);

    return (
        <div className='search'>
            {searchFilms.map((el) => (
                <NavLink key={el.id} to={`/films/${el.id}`}>
                    <h3>{el.title}</h3>
                </NavLink>
            ))}
        </div>
    );
};

export default Search;

