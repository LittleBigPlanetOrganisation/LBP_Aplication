import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import checkboxes from "../../../images/checkboxes.png";
import { ToDoListButton } from "./HeaderButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#002626",
    overflow: "hidden",
    width: "87%",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ecf2f2",
    margin: "auto",
    marginBottom: "2rem",
    boxShadow: "none",
    backgroundColor: "#ecf2f2",
    borderRadius: "15px",
  },
  grid: {
    backgroundColor: "#ecf2f2",
    marginTop: "1rem",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "90px",
    float: "left",
    marginRight: "20px",
  },
  head: {
    justifyContent: "right",
  },
  titre: {
    marginBottom: "0.1rem",
    marginTop: "1rem",
    float: "left",
    fontSize: "1.5rem",
    display: "block",
    fontWeight: "normal",
    color: "#e55812",
    marginLeft: "20px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#002626",
    fontFamily: "",
    width: "100%",
    textAlign: "left",
    marginRight: "20px",
  },
}));

export function PreparerSonVoyage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <div className="head">
            <h2 className={classes.titre}> ✈ Créer sa ToDoList</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <div className={classes.grid}>
              <img className={classes.img} src={checkboxes} alt="personae" />
              <p className={classes.paragraph}>
                Préparer son voyage est avant tout une question d'organisation,
                quoi de mieux que de partir serainement sans cette désagréable
                sensation d'avoir oublié quelque chose.
                <br /> Utilisez la fonction "checkList" pour être sûr d'avoir
                tout emporter, rayez vos taches dés qu'elles sont accomplies.
                <br /> Retrouvez facilement vos listes sur votre télephone et
                partagez la avec vos partenaires de voyages.
              </p>
            </div>
            <ToDoListButton />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
