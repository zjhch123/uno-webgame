import React from 'react';
import PropTypes from 'prop-types';
import { GamePad } from '../../components/game-pad';
import { Button } from '../../components/button';

import { Layout } from './layout';
import './style.scss';

const players = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export function Room({
  roomId,
  goBack,
}) {
  const enemies = players;

  return (
    <div className="room-page">
      <div className="room-control">
        <span>{roomId}</span>
        <Button type="link" onClick={goBack}>返回大厅</Button>
      </div>
      <Layout className="room-layout" enemies={enemies} />
      <GamePad className="game-pad-me" />
    </div>
  );
}

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
};
