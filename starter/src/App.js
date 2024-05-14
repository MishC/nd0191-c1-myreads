import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
import {Link,Routes, Route,useNavigate} from "react-router-dom";
import {getAll,update,addBook} from "./BooksAPI.js";
import Home from "./components/Home.js";


function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [status, setStatus] = useState("currentlyReading");
  const [allbooks, setAllbooks]=useState([]);

    
const getBooks =async()=>{const books=await getAll();setAllbooks([...books]) };

//const updateBook=async(book,shelf)=>{await update(book,shelf);}; //setAllbooks([book,...allbooks]) 
useEffect(async()=>{await getBooks();   },[]);

const selectCategory=async (status,book)=>{
 setStatus(status);

  if (!status || !book.id) {
    console.error('Status and ID are required parameters.');
    return;
  };
  console.log("You have ID:",book.id);

 await update(book,status); 
 

 getBooks();
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
