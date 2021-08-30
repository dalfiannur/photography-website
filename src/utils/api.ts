import { create } from 'apisauce';

export const API = create({
  baseURL: process.env.GATSBY_API_URL,
});

const ACCESS_TOKEN = 'photography-access-token';

const data = {
  [ACCESS_TOKEN]: ''
}

export const SET_ACCESS_TOKEN = (token: string) => {
  data[ACCESS_TOKEN] = token;
}

export const SECURE_API = create({
  baseURL: process.env.API_URL,
  headers: {
    'authorization': data[ACCESS_TOKEN]
  }
});