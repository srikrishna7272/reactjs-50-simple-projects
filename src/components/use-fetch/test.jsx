import { useState } from "react";
import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch("https://dummyjson.com/products", {});
  const [dataRecieved, setDataRecieved] = useState(false);
  function handleClick() {
    setDataRecieved(!dataRecieved);
  }
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <button onClick={handleClick}>Click to fetch data</button>
      {dataRecieved ? (
        <div>
          {pending ? <h3>Pending ! Please wait</h3> : null}
          {error ? <h3>{error}</h3> : null}
          {data && data.products && data.products.length
            ? data.products.map((productItem) => <p key={productItem.key}>{productItem.title}</p>)
            : null}
        </div>
      ) : null}
    </div>
  );
}
