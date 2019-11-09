import React from 'react';
import { useUserInfo } from '../hooks/use-user-info';
import { Home } from './home';
import { Login } from './login';

export function Landing() {
  const [userInfo, setUserInfo] = useUserInfo();

  const handleLogin = (loginUserInfo) => setUserInfo(loginUserInfo);

  return (
    userInfo !== null && (userInfo.login
      ? <Home user={userInfo} />
      : <Login onLogin={handleLogin} />)
  );
}
