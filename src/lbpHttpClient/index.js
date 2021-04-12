import lbpFetch from "../lbpFetch";
import typicodeFetch from "../typicodeFetch";

const responseToJson = (response) => response.json();

export function fetchPosts() {
  return () => typicodeFetch("posts").then(responseToJson);
}

export function postUser(surName, password) {
  const body = {
    surName,
    password,
  };

  return () =>
    lbpFetch("UserAccount", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json-patch+json",
      },
      method: "POST",
      body: JSON.stringify(body),
    }).then(responseToJson);
}
