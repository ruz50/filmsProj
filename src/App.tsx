import './App.css'
import Film from './components/Film/Film';
import { Route,Routes } from 'react-router-dom';
import '@fontsource/inter';
import Main from './Pages/Main/Main';
import GenresFilms from './components/GenresFilms/GenresFilms';
import Header from './components/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/films/:id' element={<Film/>}/>
        <Route path='/:genresid' element={<GenresFilms/>}/>
      </Routes>
    </div>
  )
}


export default App
