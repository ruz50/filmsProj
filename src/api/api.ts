import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
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
    }
}

export default filmsAPI