import React, { useState, useEffect } from 'react';


export default function Categories({ categories, filterItems, activeCategory, categoryName }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // İlk başta durumu ayarla

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={isMobile ? 'dropdown-container' : 'btn-container'}>
        {isMobile ? (
          <div className="select-container">
            <select
              value={activeCategory}
              onChange={(e) => filterItems(e.target.value)}
            >
              <option className='' value="all"> {categoryName} </option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        ) : (
          categories.map((category, index) => (
            <button
              type="button"
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
