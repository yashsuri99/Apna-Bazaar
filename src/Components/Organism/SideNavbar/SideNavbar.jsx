import React from "react";
import Button from "../../Atoms/Buttons/Button";
import "./SideNavbar.scss";

export default function SideNavbar({ filteredCategory, handleProduct, currCategory }) {
  return (
    <aside className="sidebar">
      {filteredCategory.map((category) => (
        <Button
          onClick={() => handleProduct(category.id)}
          key={category.id}
          className={`${currCategory===category.id&&("active")} sidebar__button`}
        >
          {category.name}
        </Button>
      ))}
    </aside>
  );
}