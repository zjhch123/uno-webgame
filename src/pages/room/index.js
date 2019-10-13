import React from 'react';
import { GamePad } from '../../components/game-pad';
import './style.scss';

export function Room() {
  return (
    <div className="room-page">
      <GamePad />
    </div>
  );
}
