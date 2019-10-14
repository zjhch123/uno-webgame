import React, { useState } from 'react';
import { UserInfo } from '../../constants/prop-types';
import { Room } from '../room';
import { Hall } from '../hall';

import './style.scss';

export function Home({
  user,
}) {
  const [roomId, setRoomId] = useState(user.roomId);

  const goBackToHome = () => {
    setRoomId(null);
  };

  const joinRoom = (id) => {
    setRoomId(id);
  };

  return roomId
    ? <Room user={user} roomId={roomId} goBack={goBackToHome} />
    : <Hall user={user} joinRoom={joinRoom} />;
}

Home.propTypes = {
  user: UserInfo.isRequired,
};
