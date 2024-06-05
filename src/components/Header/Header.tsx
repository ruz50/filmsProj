import { useState } from 'react'
import SearchAppBar from '../HeaderMUI/HeaderMUI'
import MenuHeader from '../MenuHeader/MenuHeader'

const Header = () => {
    const[open,setOpen]=useState(false)
  
    
    const isOpen:()=>void =()=>{
        setOpen(!open)
    }

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