import React, { useEffect } from 'react';
import PropType from 'prop-types';
import _ from 'underscore';

import { Button } from '../../components/button';
import { useFetch } from '../../hooks/use-fetch';
import { AuthLoginProducer, UserLoginProducer } from '../../api';

import './style.scss';

export function Login({
  onLogin,
}) {
  const AuthLogin = useFetch(AuthLoginProducer);
  const UserLogin = useFetch(UserLoginProducer);

  const login = () => {
    AuthLogin().then(({ data }) => {
      window.location.href = data;
    });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (_.isEmpty(code)) {
      return;
    }

    UserLogin(code).then(({ data: userInfo }) => {
      if (!userInfo.login) { return; }

      onLogin(userInfo);
      window.history.pushState('login', '', '/');
    });
  }, [UserLogin, onLogin]);

  return (
    <div className="login-page">
      <div>
        <Button onClick={login}>使用github账号登录</Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropType.func.isRequired,
};
