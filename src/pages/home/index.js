import React, { useState } from 'react';
import { Button } from '../../components/button';
import { HomeBar } from '../../components/home-bar';
import { UserInfo } from '../../constants/prop-types';
import { Room } from '../room';

import './style.scss';

export function Home({
  user,
}) {
  const [roomId, setRoomId] = useState(null);

  const goBackToHome = () => setRoomId(null);

  if (roomId) {
    return (
      <Room id={roomId} goBack={goBackToHome} />
    );
  }

  return (
    <div className="home-page">
      <div className="info-group">
        <HomeBar user={user} />
      </div>
      <div className="action-group">
        <Button className="action-button" onClick={() => setRoomId(123456)}>创建房间</Button>
        <Button className="action-button">加入房间</Button>
        <Button className="action-button">随机匹配</Button>
      </div>
    </div>
  );
}

Home.propTypes = {
  user: UserInfo.isRequired,
};
