import axios from "axios";

export default () => {
    return axios.create({
      baseURL: 'https://serviciopagina.upea.bo',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      }
    })
  }