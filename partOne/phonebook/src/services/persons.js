import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const remove = (person) => {
    const request = axios.delete(`${baseUrl}/${person.id}`);
    return request.then((response) => response.data)
}

const update = (person, newObject) => {
  const request = axios.put(`${baseUrl}/${person.id}`, newObject);
  return request.then((response) => response.data)
}

export default { getAll, create, remove, update };
