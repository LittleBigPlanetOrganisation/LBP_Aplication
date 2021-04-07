export default function lbpFetch(resource) {
  const baseUri = "//localhost:3001";

  return fetch(`${baseUri}/${resource}`);
}
