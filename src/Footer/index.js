import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import Instagram from "./instagram.png";
import facebook from "./facebook.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#002626",
    overflow: "hidden",
    width: "100%",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#002626",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "#e55812",
    marginBottom: "0.8rem",
    boxShadow: "none",
    margin: "0px",
    backgroundColor: "#002626",
    alignItems: "center",
  },
  img: {
    marginTop: "1.4rem",
    maxWidth: "30px",
    alignItems: "center",
    display: "inline-flex",
    marginRight: "10px",
    marginLeft: "10px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.3)",
      transition: ".3s ease-in-out",
    },
  },
  titre: {
    marginBottom: "1rem",
    marginTop: "1rem",
    fontSize: "0.8rem",
    display: "inline",
    fontWeight: "normal",
    color: "white",
    listStyle: "none",
  },
  footer: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "#e55812",
    marginBottom: "0px",
    boxShadow: "none",
    backgroundColor: "#031a1a",
  },
  mention: {
    fontSize: "0.8rem",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <div className="icon">
              <h4 className="name">Rejoignez nous!</h4>
              <img className={classes.img} src={Instagram} alt="instagram" />
              <img className={classes.img} src={facebook} alt="facebook" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <div className="head">
              <ul className={classes.titre}>
                <li className="link">
                  <h4 className="name">LÉGAL</h4>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Conditions générales
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Politique de confidentialités
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Informations sur le droit d'auteur
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Politique des cookies
                  </Link>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <div className="head">
              <ul className={classes.titre}>
                <li className="link">
                  <h4 className="name">AIDE</h4>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Support
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Contact
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    <br />
                    S'inscrire à la NewsLetter
                  </Link>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <div className="head">
              <ul className={classes.titre}>
                <li className="link">
                  <h4 className="name">A PROPOS</h4>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Qui sommes nous ?
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Vendez votre contenu
                  </Link>
                </li>
                <li className="link">
                  <Link to="/inspirations" className="hh">
                    Forfaits & prix
                  </Link>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.footer}>
            <p className={classes.mention}>
              &copy;{new Date().getFullYear()} Tous droits réservés | Ysikael
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
