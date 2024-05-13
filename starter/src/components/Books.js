import ChooseCategory from "./ChooseCategory";

const Books = ({category,selectedBooks,selectCategory})=>{
    
   const selectedHTML=selectedBooks.map((book,index)=>  
   <li key={index}>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${book.imageLinks.thumbnail})`
        }}       
        >
        </div>    

        <ChooseCategory category={category} selectCategory={selectCategory} title={book.title}/></div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
   );
  return selectedHTML;
};
  export default Books;