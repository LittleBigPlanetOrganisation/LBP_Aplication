import React from "react";
import { Box, Typography } from "@material-ui/core";

import Logo from "../../../Logo";
import { HeaderButton, BodyCardButton } from "./HeaderButton";
import { BodyButton } from "./HeaderButton";
import { DescriptionServices } from "./DescriptionServices";
import { TitlebarGridList } from "./TitlebarGridList";
import { ExperienceClient } from "./ExperienceClient";
import "./styles.css";
import Page from "../../../Page";
import Slideshow from "./Slideshow";

export default function Accueil() {
  return (
    <Page>
      <section className="accueil">
        <div className="clouds" />
        <Logo />
        <Typography variant="h2">
          'Partagez vos univers avec l'univers'
        </Typography>
        <Box component="span" m={1}>
          <HeaderButton />
        </Box>
      </section>
      <section className="description">
        <Typography variant="h5">
          'Organisez, partagez et imprimez vos voyages en toute simplicité'
        </Typography>
        <DescriptionServices />
        <BodyButton />
      </section>
      <section className="description">
        <Typography variant="h5">'Découvrir et s'inspirer'</Typography>
      </section>
      <section className="carnet">
        <TitlebarGridList />
      </section>
      <BodyCardButton />
      <section className="description">
        <Typography variant="h5">'Découvrir et partager'</Typography>
        <ExperienceClient />
      </section>
      <section className="description">
        <Typography variant="h5">'Découvrir et s'inspirer'</Typography>
      </section>
      <div>
        <Slideshow />
      </div>
    </Page>
  );
}
