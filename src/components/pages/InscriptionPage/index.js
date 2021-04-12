import { Button, TextField, Typography } from "@material-ui/core";
import "./styles.css";

import Page from "../../../Page";
import useSubscribeForm from "../../../useSubscribeForm";
import useSubmitForm from "../../../useSubmitForm";

export default function InscriptionPage() {
  const [surName, password, { setUsername, setPassword }] = useSubscribeForm();
  const [submitForm] = useSubmitForm();

  return (
    <Page>
      <section className="titre">
        <Typography variant="h5">
          Rejoignez la communauté de LittleBigVoyageurs
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="surName"
            label="surName"
            value={surName}
            onChange={setUsername}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={submitForm(surName, password)}
          >
            S'inscrire
          </Button>
        </form>
      </section>
    </Page>
  );
}
