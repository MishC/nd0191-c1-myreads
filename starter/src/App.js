import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Reading from "./components/Reading/Reading.jsx";
import WantRead from "./components/WantRead/WantRead.jsx";
import Read from "./components/Read/Read.jsx";
import {get, getAll, update,search} from "./BooksAPI.js";

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

    const addBook=()=>{
      const book={title:"To Kill a Mockingbird", 
      authors: ['Harper Lee'],id:"rstuvxyz2", averageRating: 4,categories:["drama"]};
      update(book,"wantToRead");

    };
 
    
    const selectCategory=(event)=>{
      setCategory(event.target.value);

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
            <Reading selectCategory={selectCategory}/>
            <WantRead/>
            <Read/>
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
