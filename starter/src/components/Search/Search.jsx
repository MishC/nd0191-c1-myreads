import {useState} from "react";
const Search=({showSearchPage})=>{
const [searchPage,setSearchPage]=useState(showSearchPage);
return (
<div className="search-books">
<div className="search-books-bar">
  <a
    className="close-search"
    onClick={() => setSearchPage(!showSearchPage)}
  >
    Close
  </a>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title, author, or ISBN"
    />
  </div>
</div>
<div className="search-books-results">
  <ol className="books-grid"></ol>
</div>
</div>)}
export default Search;