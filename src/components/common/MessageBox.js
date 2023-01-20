import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function MessageBox(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
}

export default MessageBox;
