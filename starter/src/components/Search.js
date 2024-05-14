import {useState} from "react";
import { search } from "../BooksAPI";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const Search=({selectCategory})=>{
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
   <DisplayBooks category="" allbooks={searchedBooks} selectCategory={selectCategory}/>

</div>:<div>No book match your criteria.</div>}
</div>
</div>)}
Search.propTypes = {
    selectCategory: PropTypes.func.isRequired,
  };
export default Search;