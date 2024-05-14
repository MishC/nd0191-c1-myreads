import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
//import allBooks from "./AllBooks.json";
import {Link,Routes, Route,useNavigate} from "react-router-dom";
import {getAll,update,addBook} from "./BooksAPI.js";
//import DisplayBooks from "./components/DisplayBooks.js";
import Home from "./components/Home.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [status, setStatus] = useState("currentlyReading");
  const [allbooks, setAllbooks]=useState([]);
  const [updatedBook,setUpdatedBook]=useState(null);
  const [bookID,setBookId]=useState(null);

  
    
const getBooks =async()=>{const books=await getAll();setAllbooks([...books]) };

//const updateBook=async(book,shelf)=>{await update(book,shelf); setAllbooks([book,...allbooks]) };
useEffect(async()=>{await getBooks();   },[]);

const selectCategory=async (status,book)=>{
 //setBookId(id);
 setStatus(status);

  if (!status || !book) {
    console.error('Status and ID are required parameters.');
    return;
  };
  console.log("You have ID:",book.id);

 //setUpdatedBook( allbooks.filter(book => book.id === id));}
//if (updatedBook!==null&&status){
 await update(book,status); //}else{console.log("Nothing to update")};
 
 



await getBooks();
}; 
  



 
  return (
    <div className="app">

      
        <Routes> 
          <Route exact path="/search" element={
            <Search  selectCategory={selectCategory}/>}/>
            <Route  exact path="/"
            element={<Home  allbooks={allbooks} selectCategory={selectCategory} />}/>
        </Routes>

     
        
            <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
          </div>
  
  );
}

export default App;
