import { useState } from "react";
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
export default ChooseCategory
