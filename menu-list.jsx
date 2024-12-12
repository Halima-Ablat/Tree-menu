import React from "react";
import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list">
      {list.map((listItem) => (
        <MenuItem item={listItem} />
      ))}
    </ul>
  );
}

export default MenuList;
