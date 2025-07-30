
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul>
        <li>
          <NavLink to= '/' className={({isActive})=>
        isActive?"active-Link":""}>
            Home</NavLink>
        </li>
        <li>
             <NavLink to='/About' className={({isActive})=> isActive?"active-Link":""}> About</NavLink>
        </li>
        <li>
         <NavLink to='/Contact' 
         className={({isActive})=>
            isActive?"active-Link":""
         }>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
