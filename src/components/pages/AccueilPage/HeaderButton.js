import React from "react";
import "./HeaderButton.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none",
  },
}));

export function HeaderButton() {
  return (
    <Link to="connexion">
      <button className="headerButton">Préparer un voyage</button>
      <button className="headerButton">Créer un carnet</button>
    </Link>
  );
}

export function BodyButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Link to="ensavoirplus">
              <button className="bodyButton">En savoir plus</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export function ToDoListButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper>
            <Link to="ensavoirplus">
              <button className="ToDoListButton">Créer sa checkList</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export function CardButton() {
  return (
    <div>
      <button className="cardButton">Voir</button>
    </div>
  );
}

export function BodyCardButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Link to="ensavoirplus">
              <button className="bodyButton">Créer un carnet</button>
              <button className="bodyButton">Voir tous les carnets</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
