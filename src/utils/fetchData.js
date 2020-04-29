/**Custom Universal API calls of all kinds*/
const url = require("url");

export const fetchData = (
  endpoint,
  method = "get",
  body = {},
  query = {},
  optionalHeaders = {},
  isMultipart = false
) => {
  let queryString = "";

  if (Object.keys(query).length > 0) {
    queryString = url.format({ query });
  }

  const targetURL = endpoint + queryString;

  let config;

  if (isMultipart === false) {
    config = { method, headers: { "Content-Type": "application/json" } };
  } else {
    config = { method };
  }
  if (Object.keys(optionalHeaders).length > 0) {
    config.headers = Object.assign({}, optionalHeaders);
  }

  if ((method === "post" || method === "put") && isMultipart === false) {
    config.body = JSON.stringify(body);
  } else if ((method === "post" || method === "put") && isMultipart === true) {
    config.body = body;
  }

  return fetch(targetURL, config)
    .then((response) => {
      if (response.status === 404) {
        //if api is not found notify user
        // sendNotification('warning', 'Something went wrong. Please try again', 3);
      }
      return response;
    })
    .then((response) =>
      response.json().then((data) => {
        return { status: response.status, data };
      })
    );
};
