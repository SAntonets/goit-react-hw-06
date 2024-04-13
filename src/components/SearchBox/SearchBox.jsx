import clsx from "clsx";
import css from "./SearchBox.module.css"
import { useId } from "react";
import { useSelector } from "react-redux";


const SearchBox = () => {
    
  const filters = useSelector(state => state.contacts.filters);
  

  const handleChange = (evt) => {
    filters(evt.target.value);
  };


  const searchID = useId();  

  return (
    <div>
      <label className={css.searchLabel} htmlFor={searchID}>Find contacts by name</label>
      <input className={css.searchInput} id={searchID} type="text" value={filters} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;