// @flow
const API_URL = process.env.REACT_APP_API_URL || '';

export function fetchAPI(path, options, type) {
  const fetchOptions = {};
  fetchOptions.method = options.method || 'GET';

fetchOptions.headers = {
  ...fetchOptions.headers,
};

if (type !== 'image') {
  fetchOptions.headers = {
    ...fetchOptions.headers,
    'Content-Type': 'application/json',
  };
}

if (options.headers) {
  fetchOptions.headers = { ...fetchOptions.headers, ...options.headers };
}

if (options.body && type !== 'image') {
  fetchOptions.body = JSON.stringify(options.body);
}

return fetch(`${API_URL}/${path}`, fetchOptions)
  .then((response) => {
    return response.json();
  })
  .then(data => data);
}
