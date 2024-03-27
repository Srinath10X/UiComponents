import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div class="container">
        <div class="wrapper">
          <input type="textarea" rows="2" cols="10" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass mag"></i>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
