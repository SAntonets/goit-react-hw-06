import clsx from "clsx";
import css from "./SearchBox.module.css"
import { useId } from "react";
import { useSelector } from "react-redux";


const SearchBox = () => {
    
     const contacts = useSelector(state => state.contacts.contacts);
     const filter = useSelector(state => state.filter.filter);  
 
      

  const searchID = useId();
    
    const handleChange = (evt) => {
    (evt.target.value);
  };

   

  return (
    <div>
      <label className={css.searchLabel} htmlFor={searchID}>Find contacts by name</label>
      <input className={css.searchInput} id={searchID} type="text"  onChange={handleChange}/>
    </div>
  );
};

export default SearchBox;