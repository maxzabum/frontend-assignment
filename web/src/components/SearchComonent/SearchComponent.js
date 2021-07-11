import React from "react";
import { SearchContainer, SearchInput } from "./SearchComponentStyle";
function SearchComponent({ setSearchWord, keyword, ...props }) {
  return (
    <SearchContainer>
      <SearchInput
        placeholder={"หาที่เที่ยวแล้วไปกัน..."}
        onChange={(e) => setSearchWord(e.target.value)}
        value={keyword ? keyword : ""}
      />
    </SearchContainer>
  );
}

export default SearchComponent;
