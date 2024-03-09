/* eslint-disable react/prop-types */
import "../styles.css";
export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        className="city-search"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="text"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
