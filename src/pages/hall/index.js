import React from 'react';
import PropType from 'prop-types';
import { Button } from '../../components/button';
import { HomeBar } from '../../components/home-bar';
import { UserInfo } from '../../constants/prop-types';

import './style.scss';

export function Hall({
  user,
  joinRoom,
}) {
  return (
    <div className="hall-page">
      <div className="info-group">
        <HomeBar user={user} />
      </div>
      <div className="action-group">
        <Button className="action-button" onClick={() => joinRoom(1000)}>创建房间</Button>
        <Button className="action-button" onClick={() => joinRoom(1001)}>加入房间</Button>
        <Button className="action-button" onClick={() => joinRoom(1002)}>随机匹配</Button>
      </div>
    </div>
  );
}

Hall.propTypes = {
  user: UserInfo.isRequired,
  joinRoom: PropType.func.isRequired,
};
