import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    },
})

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const filmsAPI = {
    getGenres(global:string){
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=${global}`)
    },
    getFilms(pageCount : number,global:string){
        return instance.get(`discover/movie?api_key=${apiKey}&language=${global}&page=${pageCount}`)
    },
    getOne(id:string | undefined,global:string){
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=${global}`)
    },
    getGenresFilm(genreId:string | undefined,pageCount:number){
        return instance.get (`/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${pageCount}`)
    },
    getSearch(search : string){
        return instance.get (`search/movie?api_key=${apiKey}&query=${search}`)
    },
    getTrailer(movieId : string | undefined){
        return instance.get(`/movie/${movieId}/videos?language=en-US`)
    }
}

export default filmsAPI