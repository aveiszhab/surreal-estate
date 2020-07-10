import axios from "axios";

const url = "http://localhost:4000/api/v1";

const postProperty = (data) => {
  return axios({
    method: "post",
    url: `${url}/propertyListing`,
    data,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

// eslint-disable-next-line import/prefer-default-export
export { postProperty };
