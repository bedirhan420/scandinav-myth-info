import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import datatr from "./datatr";
import dataen from "./dataen";
import datano from "./datano";

const allCategories = ["all", ...new Set(datatr.map((item) => item.category))];

function App() {
  const [selectedLang, setSelectedLang] = useState("TR");
  const langs = ["TR", "EN", "NO"];

  let items = [];
  let title;
  let src;
  let categoryName;

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
  };

  if (selectedLang==="TR") {
    items = datatr;
    title="İskandinav Mitolojisi"
    src="https://img.freepik.com/free-vector/illustration-turkey-flag_53876-27134.jpg?w=1060&t=st=1692445982~exp=1692446582~hmac=f306111372d8d63cc958e37f41e171ede111bc5ec2c09a8731bdc31d1deef857"
    categoryName="Kategoriler"
  }else if (selectedLang==="EN") {
    items = dataen;
    title="Scandinav Mythology"
    src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=1060&t=st=1692446031~exp=1692446631~hmac=f8070c13428756a8cc8bfce523cfb25c5768fe4a53d31119d381fa0d7965b57e"
    categoryName="Categories"
  }
  else if (selectedLang==="NO") {
    items = datano;
    title="Skandinavisk Mytologi"
    src="https://img.freepik.com/free-vector/illustration-norway-flag_53876-27115.jpg?w=1060&t=st=1692446058~exp=1692446658~hmac=6826a09df64c05f8526ae93ef133ae13469e39c2ecbb759af89ba234b22b12c0"
    categoryName="Kategorier"
  }
 
  


  // const [dataLang,setDataLang] = useState(datatr)
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <div className="dropdown-container-lang">
        <div className="dropdown">
        <select 
          className="dropdown-select"
          value={selectedLang}
          onChange={(e) => handleLangSelect(e.target.value)}
        >
          {langs.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
        <img src={src} alt={selectedLang} className="flag"/>
      </div>
      <section className="holiday section">
        <div className="title">
          <h2> {title} </h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
          categoryName={categoryName}
        />
        <Menu items={menuItems} />
      </section>
    </div>
  );
}

export default App;
