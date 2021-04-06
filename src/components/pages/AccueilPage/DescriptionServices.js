import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import organiser from "../../../images/iconOrganiser.jpg";
import conserver from "../../../images/iconConserver.jpg";
import partager from "../../../images/iconPartager.jpg";
import imprimer from "../../../images/iconImprimer.jpg";

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
    maxWidth: "40%",
    maxHeight: "40%",
  },
  titre: {
    marginBottom: "1rem",
    marginTop: "1rem",
    color: "#e55812",
  },
  paragraph: {
    fontSize: "0.9rem",
    color: "#002626",
    fontFamily: "",
  },
}));

export function DescriptionServices() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={organiser} alt="organiser" />
            <h2 className={classes.titre}>Organiser</h2>
            <p className={classes.paragraph}>
              Une application web et mobile pour conserver vos souvenirs de
              voyage et qui fonctionne sans connection internet. Plannifier vos
              aventures pour ne rien oublier.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={conserver} alt="organiser" />
            <h2 className={classes.titre}>Conserver</h2>
            <p className={classes.paragraph}>
              Une application qui permet de conserver tous vos souvenirs de
              voyage en un seul endroit. Créez plusieurs carnets à thème en
              fonction de vos aventures.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={partager} alt="organiser" />
            <h2 className={classes.titre}>Partager</h2>
            <p className={classes.paragraph}>
              Partagez toutes vos aventures avec vos amis et votre famille.
              Invitez vos amis à vous suivre en temps reel dans votre parcours.
              Exportez le PDF de votre voyage à tout moment.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={imprimer} alt="organiser" />
            <h2 className={classes.titre}>Imprimer</h2>
            <p className={classes.paragraph}>
              Vous désirez garder vos souvenirs dans un album ? Faites imprimez
              vos carnets en selectionnant vos photos préférées . Offrez à vos
              proches vos moments favoris.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
