const axios = require('axios');
const API_HOST = process.env.API_HOST || 'http://localhost:8081';

function get (url, params) {
  return axios({
    headers: {'Accept': 'application/json'},
    method: 'get',
    url: `${API_HOST}${url}`,
    params: params,
    responseType: 'json'
  })
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err);
  })
}

function post (url, data) {
  return axios({
    headers: {'Accept': 'application/json'},
    method: 'post',
    url: `${API_HOST}${url}`,
    data: data,
    responseType: 'json'
  })
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = {
  get,post
};
