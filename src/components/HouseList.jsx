import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import RepCard from "./RepCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    position: "relative",
    top: 60,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const HouseList = (props) => {
  const [house, setHouse] = useState();
  const classes = useStyles();
  const houseUrl =
    "https://api.propublica.org/congress/v1/117/house/members.json";
  const options = {
    headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" },
    mode: "cors",
  };

  useEffect(() => {
    const pullHouse = async () => {
      if (!house) {
        const houseMembers = await fetch(houseUrl, options);
        const houseMembersJson = await houseMembers.json();
        await setHouse({ house: houseMembersJson.results[0].members });
      }
    };
    pullHouse();
  });

  const renderHouse = (members) => {
    console.log("HOUSE RENDERED");
    return members.house
      .filter((member) => {
        const { first_name, last_name } = member;
        const fullName = `${first_name} ${last_name}`.toLowerCase();
        return fullName.includes(props.nameQuery);
      })
      .map((curr, i) => {
        return <RepCard key={curr.id} member={curr} />;
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        House
      </Typography>

      {!house && <CircularProgress />}

      <Grid container spacing={3} justify="center" alignItems="center">
        {house && renderHouse(house)}
      </Grid>
    </div>
  );
};

export default HouseList;
