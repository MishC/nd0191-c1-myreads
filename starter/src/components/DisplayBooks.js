import Books from "./Books";

const DisplayBooks=({category,allbooks, selectCategory})=>{
const separateCamelCase=(str)=> {
   
    return str.replace(/([A-Z])/g, ' $1').trim().split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
  }
return (    <div className="bookshelf">
                <h2 className="bookshelf-title">{category!=="none"?separateCamelCase(category):"Searched Books"}</h2>
                <div className="bookshelf-books">{(allbooks!=="undefined"&&allbooks!==null&&Array.isArray(allbooks))?
                  <ol className="books-grid">
                    
                 <Books  selectedBooks={allbooks} selectCategory={selectCategory} />
                  </ol>:<ol className="books-grid"></ol>}
                </div>
              </div>)

};
export default DisplayBooks
