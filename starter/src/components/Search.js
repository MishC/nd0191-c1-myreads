import {useEffect, useState} from "react";
import { search } from "../BooksAPI";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";


const Search=({closeSearch})=>{
const [inputValue, setInputValue]=useState([]);
const [searchedBooks,setSearchedBooks]=useState([]);

 

const handleChange = async (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    const data = await search(newValue);
    setSearchedBooks(data);
    console.log(searchedBooks);
  };

return(
<div className="search-books">
<div className="search-books-bar">
    <Link to="/"
    className="close-search"
    onClick={()=>closeSearch(false)}
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
<div className="search-books-results">
   {searchedBooks.length>0?
  <div>
   <DisplayBooks category="" allbooks={searchedBooks} />

</div>:<div></div>}
</div>
</div>)}
export default Search;