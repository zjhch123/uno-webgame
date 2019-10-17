import { createFetchToken } from '../helper/create-fetch-token';

export const UserProducer = () => createFetchToken('/api/user');

export const UserLoginProducer = ({ username, password }) => {
  const formData = new window.FormData();
  formData.append('username', username);
  formData.append('password', password);

  const options = process.env.NODE_ENV === 'production'
    ? {
      method: 'post',
      body: formData,
    }
    : {
      method: 'get',
    };

  return createFetchToken('/api/login', options);
};
