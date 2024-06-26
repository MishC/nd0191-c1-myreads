import ChooseCategory from "./ChooseCategory";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import PropTypes from "prop-types";

const Books = ({selectedBooks,selectCategory,selectBook})=>{
const [bookThis, setBookThis] =useState({});
  
  const handleLink = (book) => {
    selectBook(book);
  };

   const selectedHTML=selectedBooks.map((book,index)=>  

   <li key={index}>
    
    <div className="book">
      <div className="book-top">
      {  book.imageLinks && typeof book.imageLinks.thumbnail !== "undefined" ? (

    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${book.imageLinks.thumbnail})`
      }}
    ></div>
  ) : (
    <div
      style={{
        width: 128,
        height: 193,
        backgroundColor: 'white', 
        border: '1px solid black', 
       
      }}
    ></div>
  )
}
{book.id&&
        <ChooseCategory  selectCategory={selectCategory} book={book}/>}
        
        </div>
      <div className="book-title">{typeof book.title!=="undefined"?book.title:""}</div>
      <div className="book-authors">{typeof book.authors!=="undefined"?book.authors:""}</div>
      <div className="book-link"><Link to="/book" onClick={ ()=>handleLink(book)
}>Details </Link></div>

    </div>
  </li>
   );
  return selectedHTML;
};
Books.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  selectedBooks: PropTypes.array.isRequired,
  selectBook:PropTypes.func.isRequired
};
  export default Books;