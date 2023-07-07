'use client'
import { useState } from 'react';

const MyComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory('');
  };

  const handleSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubCategory(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Select a category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">-- Select Category --</option>
        <option value="drinks">Drinks</option>
        <option value="fruits">Fruits</option>
      </select>

      {selectedCategory === 'drinks' && (
        <div>
          <label htmlFor="drinks">Select a drink:</label>
          <select id="drinks" value={selectedSubCategory} onChange={handleSubCategoryChange}>
            <option value="">-- Select Drink --</option>
            <option value="tea">Tea</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>
      )}

      {selectedCategory === 'fruits' && (
        <div>
          <label htmlFor="fruits">Select a fruit:</label>
          <select id="fruits" value={selectedSubCategory} onChange={handleSubCategoryChange}>
            <option value="">-- Select Fruit --</option>
            <option value="oranges">Oranges</option>
            <option value="pineapples">Pineapples</option>
          </select>
        </div>
      )}

      {selectedSubCategory && (
        <p>You selected: {selectedCategory} - {selectedSubCategory}</p>
      )}
    </div>
  );
};

export default MyComponent;
