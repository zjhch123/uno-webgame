import React from 'react';
import PropTypes from 'prop-types';
import { GamePad } from '../../components/game-pad';
import './style.scss';
import { Button } from '../../components/button';

export function Room({
  roomId,
  goBack,
}) {
  return (
    <div className="room-page">
      <span>{roomId}</span>
      <Button type="link" onClick={goBack}>返回大厅</Button>
      <GamePad className="game-pad-me" />
    </div>
  );
}

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
};
