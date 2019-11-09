import { createFetchToken } from '../helper/create-fetch-token';

export const UserInfoProducer = () => createFetchToken('/api/user/info');

export const AuthLoginProducer = () => createFetchToken('/api/auth/login');

export const UserLoginProducer = (code) => createFetchToken(`/api/user/login?code=${code}`);
