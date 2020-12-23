// @flow
export function fetchAPI(url, path, options) {
  const fetchOptions = {};
  fetchOptions.method = options && (options.method || 'GET');

  if (options && options.headers) {
    fetchOptions.headers = { ...fetchOptions.headers, ...options.headers };
  }

  const requestUrl = path ? `${url}${path}` : url;

  return fetch(requestUrl, fetchOptions)
    .then((response) => response.json())
    .then((data) => data);
}
