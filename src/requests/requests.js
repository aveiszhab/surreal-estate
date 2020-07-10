import axios from "axios";

const url = "http://localhost:4000/api/v1";

const postProperty = (data, setAlert) => {
  return axios({
    method: "post",
    url: `${url}/propertyListing`,
    data,
  })
    .then(() =>
      setAlert({
        message: "Property Added",
        isSuccess: true,
      })
    )
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );
};

// eslint-disable-next-line import/prefer-default-export
export { postProperty };
