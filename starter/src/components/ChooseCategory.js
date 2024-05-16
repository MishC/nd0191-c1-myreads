import { useState } from "react";
import PropTypes from "prop-types";

const ChooseCategory = ({ selectCategory, book }) => {
  const [selectedCategory, setSelectedCategory] = useState(book.shelf || "none");

  const handleChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    selectCategory(newCategory, book);
  };

  return (
    <div className="book-shelf-changer">
      <select value={selectedCategory} onChange={handleChange}>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" defaultValue>None</option>
      </select>
    </div>
  );
};

ChooseCategory.propTypes = {
  book: PropTypes.object.isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default ChooseCategory;
