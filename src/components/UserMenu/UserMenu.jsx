
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import c from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className={c.container}>
      <span className={c.username}>Welcome, {user.name}!</span>
      <button
        className={c.logOutBtn}
        onClick={() => {
          dispatch(logOut());
          navigate("/register", { replace: true });
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
