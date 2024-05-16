import {useState} from "react";
import { search } from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./Home";



const Search=({selectCategory,allbooks})=>{
const [inputValue, setInputValue]=useState([]);
const [searchedBooks,setSearchedBooks]=useState([]);

const fillCategory = async (books) => {
  try {
      const results = await books.map(book1 => {
          const foundBook = allbooks.find(book2 => book2.id === book1.id);
          if (foundBook) {
              return { ...book1, shelf: foundBook.shelf };
          } else {
              return {...book1,shelf:"none"}; 
          }
      });

      setSearchedBooks(results);
  } catch (error) {
      console.error("An error occurred:", error);
  }
};

const handleChange = async (e) => {
  
  const newValue = e.target.value;
  
    setInputValue(newValue);
  try{
    if (newValue.trim() !== "") { 
      const data = await search(newValue);
       fillCategory(data);     
     
     console.log("2:",searchedBooks);
      
  } else {
      setSearchedBooks([]); 
  }
}
catch (error) {console.error("Error occured:", {error})};

};




return(
<div className="search-books">
<div className="search-books-bar">
    <Link to="/"
    className="close-search"
  >
    Close
  </Link>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title, author, or ISBN"
      onChange={handleChange}
    />
  </div>
</div> 
{(searchedBooks[0] && searchedBooks.length > 0 && Array.isArray(searchedBooks))?

<div className="search-books-results">
  
  <div>
   <Home allbooks={searchedBooks} selectCategory={selectCategory}/>

</div></div>:<div>{}</div>
}
</div>

)}
Search.propTypes = {
    selectCategory: PropTypes.func.isRequired,
  };
export default Search;