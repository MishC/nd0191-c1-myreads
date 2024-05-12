import { useState } from "react";
const ChooseCategory
=({category,selectCategory,title})=>{
  const [option, setOption] = useState("");
  const handleChange = (event) => {
  
  setOption(event.target.value);
  selectCategory(option,title);
  
};


  
  
  return(
<div className="book-shelf-changer">
          <select onChange={handleChange} defaultValue={category}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>)

}
export default ChooseCategory
