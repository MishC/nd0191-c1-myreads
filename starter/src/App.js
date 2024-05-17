import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
import {Routes, Route} from "react-router-dom";
import {getAll,update} from "./BooksAPI.js";
import Home from "./components/Home.js";
import Details from "./components/Details.js";


function App() {
const [allbooks, setAllbooks]=useState([]);  
const getBooks =async()=>{
  try{
  const books=await getAll();setAllbooks([...books]) }
catch(error){console.error("Error with connection: ",{error})}};

useEffect(()=>{ getBooks();   },[]);

const selectCategory=async (status,book)=>{
  
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
            <Search  selectCategory={selectCategory} allbooks={allbooks}/>}/>
            <Route  exact path="/"
            element={<Home  allbooks={allbooks} selectCategory={selectCategory} />}/>
            <Route exact path="/details" element={
            <Details book/>}/>
        </Routes>

     
        
           
          </div>
  
  );
}

export default App;
