import {useEffect, useState} from "react";
import { search } from "../BooksAPI";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";


const Search=({closeSearch})=>{
const [inputValue, setInputValue]=useState([]);
const [searchedBooks,setSearchedBooks]=useState([]);

 

const handleChange=(e)=>{
    setInputValue(e.target.value);
    search(inputValue).then(data=>setSearchedBooks(data))};

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
    {searchedBooks.length>1?
  <div>
   <DisplayBooks category="" selectedBooks={searchedBooks} />

  </div>:<div></div>}
</div>
</div>)}
export default Search;