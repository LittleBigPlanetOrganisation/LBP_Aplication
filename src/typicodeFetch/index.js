export default function typicodeFetch(resource, options = {}) {
  const baseUri = process.env.REACT_APP_TYPICODE_BASE_URI || "//localhost:3001";

  return fetch(`${baseUri}/${resource}`, options);
}
