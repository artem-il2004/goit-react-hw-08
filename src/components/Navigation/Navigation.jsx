import clsx from "clsx"
import { NavLink } from "react-router-dom"
import c from './Navigation.module.css'
function Navigation() {
  return (
    <div>
      
        <NavLink to='' className={({isActive}) => clsx(isActive && c.active)}>Home</NavLink>
    </div>
  )
}

export default Navigation
