import axios from 'axios';

const host = "http://localhost:3001/api"

export const call = async (method, path, data) => {
  console.log(method, host + path)
  console.log("data:", data)

  const response = await axios.request({
    url: host + path,
    method: method,
    data: data,
    withCredentials: true
  }).catch( err => {
    window.alert(err);
  });

  if (response) {
    console.log("response:", response.data)
    return response.data;
  }
};

const API = {
  call
};

export default API;