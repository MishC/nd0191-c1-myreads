import Books from "./Books";


const DisplayBooks=({category,allbooks, selectCategory})=>{
const separateCamelCase=(str)=> {
   
    return str.replace(/([A-Z])/g, ' $1').trim().split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
  }
return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{separateCamelCase(category)}</h2>
                <div className="bookshelf-books">{allbooks.length>1?
                  <ol className="books-grid">
                              
                 <Books  selectedBooks={category.length>1?allbooks.filter(book=>book.shelf===category):allbooks} selectCategory={selectCategory} />
                  </ol>:<ol className="books-grid"></ol>}
                </div>
              </div>)

};
export default DisplayBooks
