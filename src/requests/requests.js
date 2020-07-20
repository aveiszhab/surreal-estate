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

const listProperty = (setProperties, setAlert) => {
  return axios({
    method: "get",
    url: `${url}/propertyListing`,
  })
    .then(({ data }) => setProperties(data))
    .catch(() =>
      setAlert({ message: "Server error. Please try again later." })
    );
};

const filterProperties = (search, setProperties, setAlert) => {
  return axios({
    method: "get",
    url: `${url}/propertyListing${search}`,
  })
    .then(({ data }) => setProperties(data))
    .catch(() =>
      setAlert({ message: "Server error. Please try again later." })
    );
};

export { postProperty, listProperty, filterProperties };
