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

const SenateList = (props) => {
  const [senate, setSenate] = useState();
  const classes = useStyles();
  // const senatePayload = props.filteredSenateList;
  const senateUrl =
    "https://api.propublica.org/congress/v1/117/senate/members.json";
  const options = {
    headers: { "X-API-Key": "JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx" },
    mode: "cors",
  };

  useEffect(() => {
    const pullSenate = async () => {
      if (!senate) {
        const senateMembers = await fetch(senateUrl, options);
        const senateMembersJson = await senateMembers.json();
        await setSenate({ senate: senateMembersJson.results[0].members });
      }
    };
    pullSenate();
  });

  const renderSenate = (members) => {
    console.log("SENATE RENDERED");
    const filteredList = members.senate
      .filter((member) => {
        const { first_name, last_name } = member;
        const fullName = `${first_name} ${last_name}`.toLowerCase();
        return fullName.includes(props.nameQuery);
      })
      .map((curr, i) => {
        return <RepCard key={curr.id} member={curr} />;
      });

    if (filteredList.length === 0) {
      return <div>No representatives found.</div>;
    }

    return filteredList;
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Senate
      </Typography>

      {!senate && <CircularProgress />}

      <Grid container spacing={3} justify="center" alignItems="center">
        {senate && renderSenate(senate)}
      </Grid>
    </div>
  );
};

export default SenateList;
