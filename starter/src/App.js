import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";

import {get, getAll, update,search} from "./BooksAPI.js";
import DisplayBooks from "./components/DisplayBooks.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  
  
  

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
            <DisplayBooks  category="currentlyReading" />
            <DisplayBooks  category="wantToRead" />
            <DisplayBooks  category="read" />
           {/* <DisplayBooks  category={selectCategory("wantToRead")} selectBook={selectBook} selectedBooks={selectedBooks}/>
            <DisplayBooks category={selectCategory("Read")} selectBook={selectBook} selectedBooks={selectedBooks}/>*/}


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
