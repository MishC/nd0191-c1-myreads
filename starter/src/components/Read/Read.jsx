import DisplayBook from "../Books";
const Read=({selectCategory})=>{
    
    
    return (
    
              
    <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      <DisplayBook status="read" selectCategory={selectCategory}/>

      </ol>
    </div>
  </div>
)};
export default Read;