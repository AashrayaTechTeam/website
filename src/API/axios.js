import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

const handleError = (error) => {
  console.log(error);
};

function GET(url, headers = null) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response))
      .catch(function (error) {
        handleError(error);
        reject(error);
      });
  });
}
function POST(url, data = {}, headers = null) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof data !== "string") {
        data = JSON.stringify(data);
      }
    } catch (error) {
      reject(error);
    }

    axios
      .post(url, data, headers)
      .then((response) => resolve(response))
      .catch((error) => {
        handleError(error);
        reject(error);
      });
  });
}
function DELETE(url, headers = null) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((response) => resolve(response))
      .catch((error) => {
        handleError(error);
        reject(error);
      });
  });
}
function PUT(url, data, headers = null) {
  return new Promise((resolve, reject) => {
    // convert to string if it's object
    try {
      if (typeof data !== "string") {
        data = JSON.stringify(data);
      }
    } catch (error) {
      reject(error);
    }

    axios
      .put(url, data, headers)
      .then((response) => resolve(response))
      .catch((error) => {
        handleError(error);
        reject(error);
      });
  });
}
export { GET, POST, DELETE, PUT };
