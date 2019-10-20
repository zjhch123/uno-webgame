import React from 'react';
import PropTypes from 'prop-types';
import { GamePad } from '../../components/game-pad';
import { Button } from '../../components/button';

import { Layout } from './layout';
import './style.scss';

const players = [
  {
    id: 1,
    cardNum: 20,
  },
  {
    id: 2,
    cardNum: 30,
  },
  {
    id: 3,
    cardNum: 10,
  },
  {
    id: 4,
    cardNum: 40,
  },
  {
    id: 5,
    cardNum: 50,
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
