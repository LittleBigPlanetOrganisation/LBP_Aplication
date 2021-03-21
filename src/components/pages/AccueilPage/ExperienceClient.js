import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import personnae from "../../../images/personnae.png";
import Slideshow from "./Slideshow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#002626",
    overflow: "hidden",
    width: "87%",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "#e55812",
    margin: "auto",
    marginBottom: "1rem",
    boxShadow: "none",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "90px",
    float: "left",
  },
  head: {
    justifyContent: "right",
  },
  titre: {
    marginBottom: "1rem",
    marginTop: "1rem",
    float: "right",
    fontSize: "1rem",
    display: "block",
    width: "60px",
    fontWeight: "normal",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#002626",
    fontFamily: "",
    width: "100%",
    marginTop: "8rem",
  },
}));

export function ExperienceClient() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="head">
              <h2 className={classes.titre}>Jennifer 16 voyages</h2>
            </div>
            <img className={classes.img} src={personnae} alt="personae" />
            <p className={classes.paragraph}>
              " Lorsqu'on est passionné de voyage et qu'on devient parent, il
              est légitime de se poser la question: jusqu'où puis-je aller avec
              un petit bout? Que peut-on faire avec un bébé? Quel sera le regard
              des autres? lui fait-on prendre des risques? "
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Slideshow />
        </Grid>
      </Grid>
    </div>
  );
}
