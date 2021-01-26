import React, { useState } from "react";
import MenuAppBar from "./MenuAppBar";
import HouseList from "./HouseList";
import SenateList from "./SenateList";

import debounce from "../utilities/debounce";

const CardBoard = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = debounce((event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }, 200);

  return (
    <>
      <MenuAppBar nameQuery={search} changeFunction={handleChange} />
      <SenateList nameQuery={search} />
      <HouseList nameQuery={search} />
    </>
  );
};

export default CardBoard;
