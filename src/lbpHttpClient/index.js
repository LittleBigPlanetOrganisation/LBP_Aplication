import lbpFetch from "../lbpFetch";

const responseToJson = (response) => response.json();

export function fetchPosts() {
  return () => lbpFetch("posts").then(responseToJson);
}
