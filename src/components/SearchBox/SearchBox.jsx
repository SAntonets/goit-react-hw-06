import clsx from "clsx";
import css from "./SearchBox.module.css"
import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";


  const SearchBox = () => { 
  const dispatch = useDispatch();
  const searchID = useId();
    
  const handleChange = (evt) => {
    dispatch(changeFilter( evt.target.value ));
  } 

   

  return (
    <div>
      <label className={css.searchLabel} htmlFor={searchID}>Find contacts by name</label>
      <input className={css.searchInput} id={searchID} type="text"  onChange={handleChange}/>
    </div>
  );
};

export default SearchBox;