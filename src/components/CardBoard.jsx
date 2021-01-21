import React, { useEffect, useState } from "react";
import MenuAppBar from "./MenuAppBar";
import HouseList from "./HouseList";
import SenateList from "./SenateList";

const CardBoard = (props) => {
  const [senate, setSenate] = useState();
  const [house, setHouse] = useState();
  const [search, setSearch] = useState("");

  const houseUrl =
    "https://api.propublica.org/congress/v1/117/house/members.json";
  const senateUrl =
    "https://api.propublica.org/congress/v1/117/senate/members.json";
  const options = {
    headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" },
    mode: "cors",
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchCongress = async (url, chamber) => {
      if (chamber === "senate" && !senate) {
        const senateMembers = await fetch(url, options);
        const senateMembersJson = await senateMembers.json();
        await setSenate({ senate: senateMembersJson.results[0].members });
      }
      if (chamber === "house" && !house) {
        const houseMembers = await fetch(url, options);
        const houseMembersJson = await houseMembers.json();
        await setHouse({ house: houseMembersJson.results[0].members });
      }
    };

    fetchCongress(senateUrl, "senate");
    fetchCongress(houseUrl, "house");
  });

  return (
    <>
      <MenuAppBar nameQuery={search} onChange={handleChange} />
      <SenateList filteredSenateList={senate} nameQuery={search} />
      <HouseList filteredHouseList={house} nameQuery={search} />
    </>
  );
};

export default CardBoard;
