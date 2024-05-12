import ChooseCategory from "./ChooseCategory";

const Books = ({category,selectedBooks,selectCategory})=>{
    //const [selectedBooks,setSelectedBooks] = useState([]);
    //selectCategory(category);
   
   const selectedHTML=selectedBooks.map((book,index)=>  
   <li key={index}>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${book.imageLinks.thumbnails.thumbnail})`
        }}       
        >
        </div>    

        <ChooseCategory category={category} selectCategory={selectCategory} title={book.title}/></div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.length>1?book.authors.map((author,i,arr)=>{
        if (i!==arr.length-1){return`${author}, `}else {return `${author}`}}).trim():book.authors[0]}</div>
    </div>
  </li>
   );
  return selectedHTML;
};
  export default Books;