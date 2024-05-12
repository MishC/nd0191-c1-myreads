import { useState } from "react";
import SelectCategory from "./SelectCategory";
import allbooks from "../AllBooks.json";

const Books = ({category,selectCategory})=>{
    //const [selectedBooks,setSelectedBooks] = useState([]);
   const selectedBooks=allbooks.filter(book=>book.shelf!==category);
   
   const selectedHTML=selectedBooks.map(book=>  
   <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:book.imageLinks.thumbnails.thumbnail
        }}       
        >
        </div>
        <SelectCategory selectCategory={selectCategory}/>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.length>1?book.authors.map((author,i,arr)=>{
        if (i!==arr.length-1){return`${author}, `}else {return `${author}`}}).trim():book.authors[0]}</div>
    </div>
    </div>
  </li>
   );
  return selectedHTML;
};
  export default Books;