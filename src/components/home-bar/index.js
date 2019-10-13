import React from 'react';
import { Button } from '../button';
import { UserInfo } from '../../constants/prop-types';

export function HomeBar({
  user,
}) {
  return (
    <div className="home-bar">
      <span>{user.username}</span>
      <span>{user.level}</span>
      <Button type="link">退出</Button>
    </div>
  );
}

HomeBar.propTypes = {
  user: UserInfo.isRequired,
};
