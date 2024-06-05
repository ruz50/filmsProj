import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const filmsAPI = {
    getGenres(){
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
    }
}

export default filmsAPI