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
          <img src="https://media1.tenor.com/m/YJz--uyNch8AAAAd/%D0%BA%D0%BE%D1%82-%D0%B5%D1%81%D1%82.gif" alt="котик мем" className={c.img} />
          </a>
    </div>
      </div>
  )
}

export default Header
