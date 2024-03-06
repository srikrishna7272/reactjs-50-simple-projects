/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentlabel) {
    console.log([getCurrentlabel]);
    console.log({ ...displayCurrentChildren });
    console.log(!displayCurrentChildren[getCurrentlabel]);
    setDisplayCurrentChildren({
      ...displayCurrentChildren,

      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
    console.log(displayCurrentChildren[item.label]);
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>{displayCurrentChildren[item.label] ? "-" : "+"}</span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
