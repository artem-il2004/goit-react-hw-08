import { useDispatch } from "react-redux";
import c from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps.js";


function Contact({ data }) {
  const { name, number } = data; 
  const dispatch = useDispatch();
  return (
    <div className={c.wrapper}>
      <div className={c.infoWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={c.deleteBTN} onClick={() => dispatch(deleteContact(data.id))}>Delete</button>
    </div>
  );
}

export default Contact;

