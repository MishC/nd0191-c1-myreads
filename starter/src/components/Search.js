import {useEffect, useState} from "react";
import { search } from "../BooksAPI";
import DisplayBooks from "./DisplayBooks";



const Search=({closeSearch,searchCategory})=>{

const [searchedBooks,setsearchedBooks]=useState([]);

const searchBooks=()  =>{};  

const handleChange=(e)=>{
    search(e.target.value).then(data=>setsearchedBooks(data))};
return(
<div className="search-books">
<div className="search-books-bar">
  <a
    className="close-search"
    onClick={()=>closeSearch(false)}
  >
    Close
  </a>
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