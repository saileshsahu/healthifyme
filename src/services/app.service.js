import { fetchData } from "Utils/fetchData";
import { appserver } from "Utils/apiEndPoint";

//Mock API
const login = async () => {
  let loginResponse = await fetchData(
    `${appserver}/5d9d9219310000153650e30b`,
    "get"
  );
  // if (loginResponse.status === 200) {
  return loginResponse;
  // }
};

export { login };
