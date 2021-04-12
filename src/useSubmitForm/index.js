import { postUser } from "../lbpHttpClient";

export default function useSubmitForm() {
  const submitForm = (username, password) => () => {
    console.log({ username, password });
    postUser(username, password)().then((data) => console.log({ data }));
  };

  return [submitForm];
}
