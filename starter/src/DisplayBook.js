
import allbooks from "./AllBooks.json";

const DisplayBook = ({status})=>{
    allbooks.filter(book=>book.shelf!==status);
    console.log(allbooks);
   allbooks.map(book=> { return  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:book.imageLinks.thumbnails.thumbnail
        }}
              
        ></div>
        <div className="book-shelf-changer">
          <select onChange={selectCategory}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">To Kill a Mockingbird</div>
      <div className="book-authors">Harper Lee</div>
    </div>
  </li>
})
  
};
  export default DisplayBook;