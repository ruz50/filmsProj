import './App.css'
import Film from './components/Film/Film';
import { Route,Routes } from 'react-router-dom';
import '@fontsource/inter';
import Main from './Pages/Main/Main';


function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/films/:id' element={<Film/>}/>
      </Routes>
    </div>
  )
}

export default App
