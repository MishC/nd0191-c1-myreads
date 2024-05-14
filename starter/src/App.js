import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
//import allBooks from "./AllBooks.json";
import {Link,Routes, Route,useNavigate} from "react-router-dom";
import {getAll,update} from "./BooksAPI.js";
//import DisplayBooks from "./components/DisplayBooks.js";
import Home from "./components/Home.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [status, setStatus] = useState("currentlyReading");
  const [allbooks, setAllbooks]=useState([]);
  const [updatedBook,setUpdatedBook]=useState({});
  const [bookId, setBookId]=useState("");
  //const [isLoading, setIsLoading] = useState(false);
  
 
    
const getBooks =async()=>{const books=await getAll();setAllbooks([...books]) };

/*const getUpdated=async(allbooks,id)=>{
  allbooks.filter(book => book.id&&book.id === id)};*/

useEffect(async()=>{await getBooks();   },[]);

const selectCategory=async (status,id)=>{
 setBookId(id);
 setStatus(status);

  if (!status || !id) {
    console.error('Status and ID are required parameters.');
    return;
  };
 setUpdatedBook( allbooks.filter(book => book.id&&book.id === bookId));
  
  await update(updatedBook[0],status) ;


await getBooks();
}; 
  
const closeSearch=(value)=>{setShowSearchPage(value)};



 
  return (
    <div className="app">

      
        <Routes> 
          <Route exact path="/search" element={
            <Search closeSearch={closeSearch}/>}/>
            <Route  exact path="/"
            element={<Home  allbooks={allbooks} selectCategory={selectCategory} />}/>
            </Routes>

     
        
            <div className="open-search">
            <Link to="/search"
        onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</Link>
          </div>
          </div>
  
  );
}

export default App;
