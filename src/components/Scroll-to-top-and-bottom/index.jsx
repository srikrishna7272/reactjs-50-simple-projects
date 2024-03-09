import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch("https://dummyjson.com/products?limit=200", {});
  const bottomRef = useRef(null);
  if (pending) {
    return <h1> Loading Data ! Please Wait</h1>;
  }
  if (error) {
    return <h1>Error occured{error}</h1>;
  }
  function handleScrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behaviour: "smooth",
    });
  }
  function handleScrollToBottom() {
    console.log(bottomRef);
    bottomRef.current.scrollIntoView({ behaviour: "smooth" });
  }
  return (
    <div>
      <h1>Scroll to Top and bottom Feature</h1>
      <h3>This is Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.key}>{item.title}</li>)
          : null}
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.key}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is Bottom of the Page</h3>
    </div>
  );
}
