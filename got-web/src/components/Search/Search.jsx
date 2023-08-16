// Search.js
import "./Search.css";
import React from "react";

const Search = ({ setSearch, search }) => {
  return (
    <form>
      <img src="lupa.svg" className="lupa" alt="lupa" />
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Buscar..."
      />
    </form>
  );
};

export default Search;
