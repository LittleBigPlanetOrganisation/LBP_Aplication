export default function lbpFetch(resource) {
  const baseUri = process.env.REACT_APP_BASE_URI || "//localhost:3001";

  return fetch(`${baseUri}/${resource}`);
}
