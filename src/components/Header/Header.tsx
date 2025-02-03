import { useState } from 'react'
import SearchAppBar from '../HeaderMUI/HeaderMUI'
import MenuHeader from '../MenuHeader/MenuHeader'

const Header = () => {
    const[open]=useState(false)

  return (
    
    <div className='header'>
        <SearchAppBar />
        {
            open&&<MenuHeader/>
        }
       </div>
  )
}

export default Header