import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParams(event.target.innerText);
    setFilteredUsers("");
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        console.log(users);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <h2>Loading Data ! Please Wait</h2>;
  }
  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      <input name="search-users" value={searchParams} placeholder="Search users" type="text" onChange={handleChange} />
      {showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
