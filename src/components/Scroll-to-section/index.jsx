import { useRef } from "react";

/* eslint-disable react/jsx-key */
export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },

    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];
  function handleScrollToSection() {
    // ref.current.scrollIntoView({ behaviour: "smooth" });
    let pos = ref.current.getBoundingClientRect().bottom;
    console.log(ref.current);
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll To Particular Section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 4 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
