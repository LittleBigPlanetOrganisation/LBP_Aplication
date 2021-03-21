import { Typography } from "@material-ui/core";
import Page from "../Page";
import { StyledConstruction } from "./Construction";
import "./styles.css";
import LogoB from "../Logo/LogoB";

export default function EmptyPage({ title }) {
  return (
    <Page>
      <section className="header">
        <Typography variant="h3">Cette page est en construction</Typography>
        <Typography variant="h2">
          Vous êtes sur la page
          <br />" <b>{title}</b>"<br />
        </Typography>
        <div className="svg">
          <StyledConstruction />
        </div>
        <LogoB />
      </section>
    </Page>
  );
}
