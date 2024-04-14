import clsx from "clsx";
import css from "./Contact.module.css"
import { useSelector } from "react-redux";

const Contact = (
    
) => {

    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);   
    


    return (
        <div className={css.Contact} >
            <div className={css.ContactData}><p>😀</p>
            <p>☎ </p></div>
            <button className={css.ContactBTN} >Delete</button> 
        </div>
    );
};

export default Contact;

