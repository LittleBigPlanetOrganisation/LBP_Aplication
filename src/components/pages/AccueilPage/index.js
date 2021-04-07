import React from "react";
import { Box, Typography } from "@material-ui/core";

import Logo from "../../../Logo";
import { HeaderButton, BodyCardButton } from "./HeaderButton";
import { BodyButton } from "./HeaderButton";
import { DescriptionServices } from "./DescriptionServices";
import { TitlebarGridList } from "./TitlebarGridList";
import { ExperienceClient } from "./ExperienceClient";
import { PreparerSonVoyage } from "./PreparerSonVoyage";
import "./styles.css";
import Page from "../../../Page";
import PostList from "../../../PostList";

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
        <section className="carnet">
          <PostList />
        </section>
        <TitlebarGridList />
      </section>
      <BodyCardButton />
      <section className="description">
        <Typography variant="h5">'Découvrir et partager'</Typography>
        <ExperienceClient />
      </section>
      <section className="descript">
        <Typography variant="h5">
          'Préparer son voyage et gérer son budget'
        </Typography>
        <PreparerSonVoyage />
      </section>
    </Page>
  );
}
