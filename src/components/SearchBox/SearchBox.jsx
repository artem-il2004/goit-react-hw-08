import { useId } from "react";
import c from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  return (
    <div className={c.wrapper}>
      <label htmlFor={searchId} >Search</label>
      <input
        id={searchId}
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={c.inputField}
        placeholder="Search by name or phone number..."
      />
    </div>
  );
}

export default SearchBox;
