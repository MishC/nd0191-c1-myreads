import { useState } from "react";
import { Link } from "react-router-dom";

import DisplayBooks from "./DisplayBooks";

import PropTypes from "prop-types";


const Home=({allbooks, selectCategory})=>{
  const [categories,setCategories]=useState(["currentlyReading","wantToRead","read","none"]);
  
    return(
        <div className="list-books">
         {allbooks.some(book=>book.shelf==="none")? <div >{}
          </div>: <div className="list-books-title"><h1>MyReads</h1></div>}
          <div className="list-books-content">
    <div className="Main">
        {
        categories.map((category,index)=>
        allbooks.filter(book=>book.shelf===category).length>=1?
        <div key={index}>
    <DisplayBooks  category={category} allbooks={allbooks.filter(book=>book.shelf===category)} selectCategory={selectCategory} />
   </div> :<div key={index}>{}</div>)
        }   

    </div>
    <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
                 
    </div>
          
        </div>)

}

Home.propTypes = {
    selectCategory: PropTypes.func.isRequired,
    allbooks: PropTypes.array.isRequired,
  };
  
export default Home;