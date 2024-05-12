import { useState } from "react";
import Books from "./Books";
import allbooks from "../AllBooks.json";

const DisplayBooks=({category})=>{
    const [status, setStatus] = useState(category);



  const selectCategory=(status,title)=>{
    setStatus(status);
    allbooks.filter(book=>book.title===title).forEach(book=>book.shelf=status);

  };

    
return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
       
                 <Books  category ={status} selectedBooks={allbooks.filter(book=>book.shelf===category)} selectCategory={selectCategory} />
                  </ol>
                </div>
              </div>)

};
export default DisplayBooks
