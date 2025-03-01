import clsx from "clsx"
import { NavLink } from "react-router-dom"
import c from './AuthNav.module.css'

function AuthNav() {
  return (
    <div className={c.navigation}>
    <NavLink to='/register' className={({isActive}) => clsx(isActive && c.active)}>Register</NavLink>
     <NavLink to='/login' className={({ isActive }) => clsx(isActive && c.active)}>Login</NavLink>

    </div>
  )
}

export default AuthNav
