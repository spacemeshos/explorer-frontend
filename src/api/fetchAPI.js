// @flow
// const testApi = 'https://5f058f8fee44800016d3829a.mockapi.io/api/v1';
const API_URL = process.env.REACT_APP_API_URL || '';

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
