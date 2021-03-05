import React from "react";
import { Box, Typography } from "@material-ui/core";

import Logo from "../../../Logo";
import Clouds from "./Clouds";
import { HeaderButton } from "./HeaderButton";
import "./styles.css";
import Page from "../../../Page";

export default function Accueil() {
  return (
    <Page>
      <section className="accueil">
        <img className="clouds" src={Clouds} alt="clouds" />
        <Logo />
        <Typography variant="h2">
          'Partagez vos univers avec l'univers'
        </Typography>
        <Box component="span" m={1}>
          <HeaderButton />
        </Box>
      </section>
    </Page>
  );
}
