import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import { selectLoading, selectFilteredContacts } from "../../redux/contactsSlice"; 

function ContactList() {
  const loading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts); 

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <ul className={c.wrapper}>
      {filteredContacts.length === 0 ? (
        <p>There are no contacts</p>
      ) : (
        filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;