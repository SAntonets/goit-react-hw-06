import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from 'nanoid';



function App() {


const initialValues = {
  username: "",
  number: "",
};
  





 
  
  
  
 /* const handleDeletContact = (id) => {
    const updatedContacts = filteredContacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }; */


  
  return (
    <>
      
          <h1>Phonebook</h1>
          <ContactForm  initialValues={initialValues} 
            />
          <SearchBox />
          <ContactList />
  
    </>
  )
}

export default App;