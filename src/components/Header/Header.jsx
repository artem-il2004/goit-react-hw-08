import { NavLink } from "react-router-dom"
import c from './Header.module.css'
import clsx from "clsx"


function Header() {
  return (
    <div className={c.container }>
      <nav className={c.navigation}>
        <NavLink to='' className={({isActive}) => clsx(isActive && c.active)}>Home</NavLink>
        <NavLink to='/contacts' className={({isActive}) => clsx(isActive && c.active)}>Contacts</NavLink>
        <NavLink to='/register' className={({isActive}) => clsx(isActive && c.active)}>Register</NavLink>
        <NavLink to='/login' className={({isActive}) => clsx(isActive && c.active)}>Login</NavLink>
      </nav>
      <div>
        <a href="https://github.com/artem-il2004" target="_blank">внизу лого
          <img src="https://i.pinimg.com/736x/2f/90/c1/2f90c1e9fc45169c0f2cc0dfe88e73a5.jpg" alt="котик мем" className={c.img} />
          </a>
    </div>
      </div>
  )
}

export default Header
