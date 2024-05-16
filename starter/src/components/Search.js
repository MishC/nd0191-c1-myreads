import {useState} from "react";
import { search } from "../BooksAPI";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./Home";



const Search=({selectCategory,allbooks})=>{
const [inputValue, setInputValue]=useState([]);
const [searchedBooks,setSearchedBooks]=useState([]);
const [myBooks,setMyBooks]=useState([]);

/*const findIndex=(book)=>{allbooks.findIndex(bookMain=>bookMain.id===book.id)};
const changeCategory=(books)=>{books.map((book1) => 
  findIndex(book1)?book1.shelf=allbooks[findIndex(book1)].shelf:book1)};
const foundBook=(books)=>books.filter(book=>allbooks.includes(book.id))
const intersection = allBooks.filter(book => searchedBooks.includes(book));

const fillCategory = () => {
  try{
  const books = books.map((book1, ind) => {const index=allbooks.findIndex(book2=>book1.id===book2.id)
    index?book1=allbooks[index]:book1});
  }
  catch (error) {
    // Handle any errors that occur during execution
    console.error("An error occurred:", error);
}
};*/

 

const handleChange = async (e) => {
  
  const newValue = e.target.value;
  
    setInputValue(newValue);
  try{
    if (newValue.trim() !== "") { 
      const data = await search(newValue);
            
      setSearchedBooks(data); 
      setMyBooks(allbooks.filter(book => searchedBooks.includes(book.id)));
      setSearchedBooks(searchedBooks.filter(book=>!allbooks.includes(book.id)));   
      
      
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
   <DisplayBooks category="none" myBooks={searchedBooks} selectCategory={selectCategory}/>

</div></div>:<div>{}</div>
}
{myBooks.length>1&&<div>
   <Home allbooks={myBooks} selectCategory={selectCategory}/>

</div>}
</div>

)}
Search.propTypes = {
    selectCategory: PropTypes.func.isRequired,
  };
export default Search;