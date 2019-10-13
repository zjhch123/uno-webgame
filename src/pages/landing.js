import React from 'react';
import { useUserInfo } from '../hooks/use-user-info';
import { Home } from './home';
import { Login } from './login';

export function Landing() {
  const [userInfo, setUserInfo] = useUserInfo();

  const handleLogin = (loginUserInfo) => setUserInfo(loginUserInfo);

  return (
    userInfo !== null && (!userInfo.isLogin
      ? <Login onLogin={handleLogin} />
      : <Home user={userInfo} />)
  );
}
