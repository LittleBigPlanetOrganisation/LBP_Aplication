import { Typography } from "@material-ui/core";
import Page from "../Page";

export default function EmptyPage({ title }) {
  return (
    <Page>
      <Typography variant="h2">{title}</Typography>
    </Page>
  );
}
