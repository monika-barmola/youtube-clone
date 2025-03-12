import React from 'react';

const categories = ['All', 'Funny', 'Web Development', 'Music', 'Gaming'];

const FilterButtons = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-buttons">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;