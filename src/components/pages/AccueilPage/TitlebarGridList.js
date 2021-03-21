import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { tileData } from "./tileData";
import { Link } from "react-router-dom";
import "./styles.css";
import { CardButton } from "./HeaderButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3rem",
  },
  gridList: {
    width: "93%",
    height: "auto",
  },
  gridListTile: {
    width: "100%",
    marginTop: "1rem",
  },
  titreGrid: {
    color: "#e55812",
    fontSize: "1.5rem",
    fontFamily: "Raleway",
    fontWeight: "normal",
  },
  icon: {
    color: "white",
    "&:hover": {
      color: "#e55812",
      transform: "scale(1.3)",
    },
  },
  desc: {
    height: "80px",
    "&:hover": {
      height: "110px",
      transition: ".3s ease-in-out",
    },
  },
  img: {
    filter: "grayscale(0)",
    transition: ".3s ease-in-out",
    "&:hover": {
      filter: "grayscale(100%)",
      transition: ".3s ease-in-out",
    },
  },
}));

export function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={280}
        spacing={10}
        cols={5}
        className={classes.gridList}
      >
        <GridListTile
          className={classes.gridListTile}
          key="Subheader"
          cols={5}
          style={{ height: "auto" }}
        >
          <ListSubheader className={classes.titreGrid} component="div">
            ✈ Carnet de voyages
          </ListSubheader>
        </GridListTile>

        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img className={classes.img} src={tile.img} alt={tile.title} />

            <GridListTileBar
              className={classes.desc}
              title={tile.title}
              subtitle={<span>{tile.description}</span>}
              actionIcon={
                <Link to={"carnet/" + tile.title}>
                  <CardButton />
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
