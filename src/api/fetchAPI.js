// @flow
// TODO set env var on Server
const testApi = 'https://stage-explore.spacemesh.io/api';
const API_URL = process.env.REACT_APP_API_URL || testApi;

export function fetchAPI(path, options) {
  const fetchOptions = {};
  fetchOptions.method = options && (options.method || 'GET');

  if (options && options.headers) {
    fetchOptions.headers = { ...fetchOptions.headers, ...options.headers };
  }

  return fetch(`${API_URL}/${path}`, fetchOptions)
    .then((response) => response.json())
    .then((data) => data);
}
