import React from 'react';
import PropTypes from 'prop-types';
import { GamePad } from '../../components/game-pad';
import { Enemy } from '../../components/enemy';
import { Button } from '../../components/button';
import './style.scss';
import { Type } from '../../constants/enemy';

export function Room({
  roomId,
  goBack,
}) {
  return (
    <div className="room-page">
      <span>{roomId}</span>
      <Button type="link" onClick={goBack}>返回大厅</Button>
      <Enemy className="enemy-left" type={Type.Left} />
      <Enemy className="eny enemy-top" type={Type.Top} />
      <Enemy className="enemy-right" type={Type.Right} />
      <GamePad className="game-pad-me" />
    </div>
  );
}

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
};
