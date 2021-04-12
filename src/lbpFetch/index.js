export default function lbpFetch(resource, options = {}) {
  const baseUri =
    process.env.REACT_APP_LBP_BASE_URI || "https://localhost:5001";

  return fetch(`${baseUri}/${resource}`, options);
}
