import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";


const ContactList = ({ handleDeletContact }) => {

    const filters = useSelector(state => state.contacts.filters);
    const items = useSelector(state => state.contacts.items);   

 const filteredContacts = (items.filter(
    (contact) => contact.name.toLowerCase().includes(filters.toLowerCase())
  ));    


    return ( <ul className={css.contactList}> 
        {filteredContacts.map(contact => (
            <li key={nanoid()}><Contact  id={contact.id} name={contact.name} number={contact.number} handleDeletContact={handleDeletContact} /></li>
        ))}</ul>
    );
}

export default ContactList;
