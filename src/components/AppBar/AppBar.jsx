
import c from './AppBar.module.css'
import Navigation from "../Navigation/Navigation"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

function AppBar() {
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <div className={c.container}>
      <div className={c.navigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
        <div>
        <a href="https://github.com/artem-il2004" target="_blank">внизу лого
          <img src="https://media1.tenor.com/m/YJz--uyNch8AAAAd/%D0%BA%D0%BE%D1%82-%D0%B5%D1%81%D1%82.gif" alt="котик мем" className={c.img} />
          </a>
    </div>
      </div>
  )
}

export default AppBar
