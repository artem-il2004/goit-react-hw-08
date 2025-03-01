import clsx from "clsx"
import { NavLink, useNavigate } from "react-router-dom"
import { logOutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import c from './UserMenu.module.css'
function UserMenu() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
  return (
    <div>
          <NavLink to='/contacts' className={({ isActive }) => clsx(isActive && c.active)}>Contacts</NavLink>
          <button className={c.logOutBtn} onClick={() => { dispatch(logOutThunk()); navigator('/register',{replace : true});}}>Log out</button>
      </div>
  )
}

export default UserMenu
