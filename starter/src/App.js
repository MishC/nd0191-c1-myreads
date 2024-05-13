import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
import allbooks from "./AllBooks.json";
import {Link,Routes, Route} from "react-router-dom";

import DisplayBooks from "./components/DisplayBooks.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
    
  
const closeSearch=(value)=>{setShowSearchPage(value)};


 
  return (
    <div className="app">

      {showSearchPage ? (
        <Routes> 
          <Route exact path="/search" element={
            <Search closeSearch={closeSearch}/>}/>

            </Routes>

      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <DisplayBooks  category="currentlyReading" allbooks={allbooks} />
            <DisplayBooks  category="wantToRead" allbooks={allbooks}/>
            <DisplayBooks  category="read" allbooks={allbooks} />
        

            </div>
          </div>
          <div className="open-search">
            <Link to="/search"
        onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
