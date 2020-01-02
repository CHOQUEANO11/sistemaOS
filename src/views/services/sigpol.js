import axios from 'axios';

const sigpol = axios.create({
  baseURL: "https://api.pm.pa.gov.br/"
});

export default sigpol;
