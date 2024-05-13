import { useState,useEffect } from "react";
import Books from "./Books";
//import {get, getAll, update,search, addBook} from "../BooksAPI.js";


const DisplayBooks=({category,allbooks})=>{
    const [status, setStatus] = useState(category);
    //const [isLoading, setIsLoading] = useState(false);


    /*useEffect(() => {
        getAll()
          .then(items => {
            const booksToAdd = allbooks.filter(book => !items.some(item => item.id === book.id));
            booksToAdd.forEach(book=>addBook(book));
          })
          .then(() => {
            console.log("Books added successfully.");
          })
          .catch(error => {
            console.error("Error adding books:", error);
          });
      }, []);*/
      

  const selectCategory=(status,title)=>{
    setStatus(status);
    allbooks.filter(book=>book.title===title).forEach(book=>book.shelf=status);

  };

    
return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
       
                 <Books  category ={status} selectedBooks={category.length>2?allbooks.filter(book=>book.shelf===category):allbooks} selectCategory={selectCategory} />
                  </ol>
                </div>
              </div>)

};
export default DisplayBooks
