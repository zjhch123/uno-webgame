import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';
import { Button } from '../button';
import { Card } from '../card';
import {
  CardType,
  CardColor,
  FunctionalType,
  CardValue,
} from '../../constants/card';

export function GamePad({
  className,
}) {
  return (
    <div className={classNames('game-pad', className)}>
      <div className="action-controls">
        <Button className="action pass">不出</Button>
        <Button className="action confirm">确认</Button>
        <Button className="action uno">UNO</Button>
      </div>
      <div className="cards-container">
        <Card type={CardType.Normal} color={CardColor.Blue} value={CardValue.Eight} />
        <Card type={CardType.Functional} functionalType={FunctionalType.Add4} />
        <Card
          type={CardType.Functional}
          functionalType={FunctionalType.Add2}
          color={CardColor.Yellow}
        />
        <Card type={CardType.Unknown} />
      </div>
    </div>
  );
}

GamePad.propTypes = {
  className: PropTypes.string,
};

GamePad.defaultProps = {
  className: null,
};
