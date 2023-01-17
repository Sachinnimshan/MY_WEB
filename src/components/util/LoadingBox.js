import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      width: "100%"
    },
  }));

function LoadingBox(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress size="5rem" style={{color: "#94d600"}}/>
        </div>
    )
}

export default LoadingBox;
