import { useState } from "react";
import PropTypes from "prop-types";

const ChooseCategory=({selectCategory,id})=>{


  const handleChange = (e) => {
   // setOption(e.target.value);
 selectCategory(e.target.value,id);
};


  
  
  return(
<div className="book-shelf-changer">
          <select onChange={handleChange} >
      
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none" disabled>None</option>
          </select>
        </div>)

}
ChooseCategory.propTypes = {
  id: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
};
export default ChooseCategory
