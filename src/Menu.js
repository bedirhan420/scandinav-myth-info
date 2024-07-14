import React from "react";

export default function Menu({ items }) {
  return (
    <div className="section-center">
      <div className="section-center">
        {items.map((item) => {
          const { id, title, description, img } = item;
          return (
            <article key={id} className="menu-item">
              <div className="item-container">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                  </header>
                  <p className="item-text">{description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
