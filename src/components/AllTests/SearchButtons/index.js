import React from 'react';
import {SearchSvg} from "../svg";


function SearchButton() {
  return (
    <form className="pos search-container">
      <input
        className="height-full width-full"
        type="search" id="search-bar" placeholder="Search Test"/>
      <label className="pos-abs" htmlFor="search-bar">
        <SearchSvg/>
      </label>
    </form>
  );
}

export default SearchButton;
