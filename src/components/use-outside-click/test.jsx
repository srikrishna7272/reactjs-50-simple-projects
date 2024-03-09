import { useRef, useState } from "react";
import useOutSideClick from ".";

export default function UseOnClickOutsideTest() {
  function handler() {
    setShowContent(false);
  }
  const ref = useRef();
  useOutSideClick(ref, handler);
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>Please click outside of this to close this. It won't close If you click inside of this content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
