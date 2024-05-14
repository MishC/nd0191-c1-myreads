import DisplayBooks from "./DisplayBooks";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
const Home=({allbooks, selectCategory})=>{
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
    <div className="Home">
        
    <DisplayBooks  category="currentlyReading" allbooks={allbooks} selectCategory={selectCategory} />
    <DisplayBooks  category="wantToRead" allbooks={allbooks} selectCategory={selectCategory}/>
    <DisplayBooks  category="read" allbooks={allbooks} selectCategory={selectCategory}/>

    </div>
    </div>
       
        </div>)


}

Home.propTypes = {
    selectCategory: PropTypes.func.isRequired,
    allbooks: PropTypes.array.isRequired,
  };
  
export default Home;