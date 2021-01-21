import React, { useEffect, useState } from "react";
import HouseList from "./HouseList";
import SenateList from "./SenateList";

const CardBoard = (props) => {
  const [senate, setSenate] = useState();
  const [house, setHouse] = useState();
  const houseUrl =
    "https://api.propublica.org/congress/v1/117/house/members.json";
  const senateUrl =
    "https://api.propublica.org/congress/v1/117/senate/members.json";
  const options = {
    headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" },
    mode: "cors",
  };

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

  useEffect(() => {
    fetchCongress(senateUrl, "senate");
    fetchCongress(houseUrl, "house");
  });

  return (
    <>
      <SenateList filteredSenateList={senate} />
      <HouseList filteredHouseList={house} />
    </>
  );
};

export default CardBoard;
