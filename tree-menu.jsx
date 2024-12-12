import React from "react";
import MenuList from "./menu-list";

function TreeMenu({ menus = [] }) {
  return (
    <div className="tree-menu-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeMenu;
