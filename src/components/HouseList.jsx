import React from "react";
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
  const classes = useStyles();
  const housePayload = props.filteredHouseList;

  const renderHouse = (members) =>
    members.house.map((curr, i) => <RepCard key={i} member={curr} />);

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        House
      </Typography>

      {!housePayload && <CircularProgress />}

      <Grid container spacing={3} justify="center" alignItems="center">
        {housePayload && renderHouse(housePayload)}
      </Grid>
    </div>
  );
};

export default HouseList;
