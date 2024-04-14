import { nanoid } from 'nanoid';
import Contact from "../Contact/Contact"; 
import clsx from "clsx";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";


const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);   

   


    return ( <ul className={css.contactList}> 
         (
            <li key={nanoid()}><Contact 
            /></li>
        )</ul>
    );
}

export default ContactList;
