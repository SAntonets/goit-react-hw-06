import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";


const ContactList = () => {

    const contacts = useSelector(state => state.contactsBox.contacts);
    const filter = useSelector(state => state.filter.filter);  
    
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return ( <ul className={css.contactList}> 
        {filteredContacts.map(contact => (
            <li key={nanoid()}><Contact  id={contact.id} name={contact.name} number={contact.number} /></li>
        ))}</ul>
    );
}


export default ContactList;
