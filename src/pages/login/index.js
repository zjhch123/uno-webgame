import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserLoginProducer } from '../../api';
import { FormGroup } from '../../components/form-group';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { useFetch } from '../../hooks/use-fetch';

import './style.scss';

export function Login({
  onLogin,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const UserLogin = useFetch(UserLoginProducer);

  const login = () => {
    UserLogin({ username, password }).then((userInfo) => onLogin(userInfo));
  };

  return (
    <div className="login-page">
      <FormGroup label="username">
        <Input type="text" value={username} onChange={(newUsername) => setUsername(newUsername)} />
      </FormGroup>
      <FormGroup label="password">
        <Input type="password" value={password} onChange={(newPassword) => setPassword(newPassword)} />
      </FormGroup>
      <div>
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
