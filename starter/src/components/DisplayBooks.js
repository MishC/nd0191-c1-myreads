import { useState,useEffect } from "react";
import Books from "./Books";
//import {get, getAll, update,search, addBook} from "../BooksAPI.js";


const DisplayBooks=({category,allbooks, selectCategory})=>{
   
    

return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">{allbooks.length>1?
                  <ol className="books-grid">
                              
                 <Books  selectedBooks={category.length>1?allbooks.filter(book=>book.shelf===category):allbooks} selectCategory={selectCategory} />
                  </ol>:<ol className="books-grid"></ol>}
                </div>
              </div>)

};
export default DisplayBooks
