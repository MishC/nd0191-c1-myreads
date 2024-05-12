import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";

import {get, getAll, update,search} from "./BooksAPI.js";
import allbooks from "./AllBooks.json";
import DisplayBooks from "./components/DisplayBooks.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [category, setCategory] = useState("");
 
  
  useEffect(()=>{console.log( getAll()
    .then((books) => {
      console.log(books);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
    }))},[]);

    const addBook=(book, status)=>{
      
      update(book,status);

    };
 
    
  
    const selectCategory=(status)=>{
      setCategory(status);

    };

 
  return (
    <div className="app">

      {showSearchPage ? (
            <Search showSearchPage={showSearchPage} />
            

      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <DisplayBooks category="wantToRead" selectCategory={selectCategory}/>
            <DisplayBooks category="currentlyReading" selectCategory={selectCategory}/>
            <DisplayBooks category="read" selectCategory={selectCategory}/>


            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
