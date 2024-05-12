import Books from "./Books";
const DisplayBooks=({category,selectCategory})=>{
return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
       
                    <Books category={category} selectCategory={selectCategory} />
                  </ol>
                </div>
              </div>)

};
export default DisplayBooks
