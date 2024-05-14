import { useState } from "react";
import PropTypes from "prop-types";

const ChooseCategory=({selectCategory,book})=>{


  const handleChange = (e) => {
   //console.log(e.target.value, "this:",id)
 selectCategory(e.target.value,book);
};


  return(
<div className="book-shelf-changer">
          <select onChange={handleChange} onClick={()=>{}}>
      
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
