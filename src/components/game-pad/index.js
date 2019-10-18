import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';
import { Button } from '../button';
import { CardList } from '../card-list';
import { AllCards } from '../../mock/all-cards';

export function GamePad({
  className,
}) {
  return (
    <div className={classNames('game-pad', className)}>
      <div className="action-controls">
        <Button className="action pass">不出</Button>
        <Button className="action confirm">确认</Button>
        <Button className="action uno">UNO!</Button>
      </div>
      <div className="cards-container">
        <CardList list={AllCards} />
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
