import { useState, useEffect } from 'react';
import { UserProducer } from '../api';
import { useFetch } from './use-fetch';

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const User = useFetch(UserProducer);

  useEffect(() => {
    User().then(setUserInfo);
  }, []); // eslint-disable-line

  return [userInfo, setUserInfo];
}
