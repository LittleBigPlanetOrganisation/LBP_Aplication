import { Button, TextField, Typography } from "@material-ui/core";
import "./styles.css";

import Page from "../../../Page";
import useSubscribeForm from "../../../useSubscribeForm";

export default function InscriptionPage() {
  const [username, password, { setUsername, setPassword }] = useSubscribeForm();

  return (
    <Page>
      <section className="titre">
        <Typography variant="h5">
          Rejoignez la communauté de LittleBigVoyageurs
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="Username"
            label="Username"
            value={username}
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
            onClick={() => console.log({ username, password })}
          >
            S'inscrire
          </Button>
        </form>
      </section>
    </Page>
  );
}
