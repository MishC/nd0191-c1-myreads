import DisplayBook from "../Books";
 
const Reading=({selectCategory})=>{

    return(
    <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
       
                    <DisplayBook status="currentlyReading" selectCategory={selectCategory}/>
                  </ol>
                </div>
              </div>)
};

export default Reading;