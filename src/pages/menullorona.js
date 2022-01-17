import React, { useState } from "react";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";
import items from "../data/assets/data";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

const allCategories = ["Todos", ...new Set(items.map(item => item.category))];

function MenuLlorona() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");

  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Layout>
      <HomeHeader />
      <section className="menu section">
        <div className="title">
          <h2>Menú Llorona</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </Layout>
  );
}

export default MenuLlorona;
