import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from 'nanoid';



function App() {




  
  return (
    <>
      
          <h1>Phonebook</h1>
          <ContactForm  />
          <SearchBox />
          <ContactList />
  
    </>
  )
}

export default App;