import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";

import Page from "../../../Page";

export default function InscriptionPage() {
  return (
    <Page>
      <section className="titre">
        <Typography variant="h5">
          'Rejoignez la communauté de LittleBigVoyageurs'
        </Typography>
      </section>
    </Page>
  );
}
