import HTTP from '../httpService/HttpService';

export const getImages = async () => {
  try {
    const res = await HTTP.get(`${HTTP.baseURL}/photos`);
    return res;
  } catch (error) {
    return error.response.status;
  }
};

export const getUsers = async () => {
  try {
    const res = await HTTP.get(`${HTTP.baseURL}/users`);
    return res;
  } catch (error) {
    return error.response.status;
  }
};

export const getPosts = async () => {
  try {
    const res = await HTTP.get(`${HTTP.baseURL}/posts`);
    return res;
  } catch (error) {
    return error.response.status;
  }
};

export const getComments = async () => {
  try {
    const res = await HTTP.get(`${HTTP.baseURL}/comments`);
    return res;
  } catch (error) {
    return error.response.status;
  }
};
