import React, { useEffect } from 'react';
import './Film.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useParams } from 'react-router-dom';
import {  fetcTrailer, fetchFilm } from '../../store/slices/FilmsSlice';

const Film: React.FC = () => {
    const {film , trailer} = useAppSelector(state => state.filmsData);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string| undefined }>();
    const {global} = useAppSelector((state)=>state.globalData)

    useEffect(() => {
        if(id){
            dispatch(fetchFilm({id,global}));
            dispatch(fetcTrailer(id))
        }    
    }, [global,id]);
    return (
        <div className='Film'>
            <img src={'https://image.tmdb.org/t/p/w500/' + film.backdrop_path} alt="error" />
            <div>
            <h1>{film.title}</h1>
                <p className='pPar'>Release Data</p> <p> {film.release_date}</p>
                <p className='pPar'>Original lenguage</p> <p>{film.original_language}</p>
                <p className='pPar'>Original title </p> <p>{film.original_title}</p>
                <p className='pPar'> Popularity</p> <p> {film.popularity}</p>
                <p className='pPar'> Overview</p> <p> {film.overview}</p>
                <p className='pPar'>Vote count </p> <p>{film.vote_count}</p>
                <p className='pPar'>Vote average </p> <p> {film.vote_average}</p>
            </div>
            <div className='divVideo'>
            {trailer.length > 0 && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer[0].key}`}
                    title="Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            </div>
        </div>
    );
};

export default Film;
