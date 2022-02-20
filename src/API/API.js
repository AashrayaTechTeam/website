import { GET } from "./axios";

const getVolunteers = (tag) => {
  return new Promise((resolve, reject) => {
    GET(`volunteers/${tag}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export { getVolunteers };
