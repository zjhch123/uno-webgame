import { useState, useEffect } from 'react';
import { UserInfoProducer } from '../api';
import { useFetch } from './use-fetch';

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const User = useFetch(UserInfoProducer);

  useEffect(() => {
    User().then(({ data }) => setUserInfo(data));
  }, [User]);

  return [userInfo, setUserInfo];
}
