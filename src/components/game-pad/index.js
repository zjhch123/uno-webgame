import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';
import { Button } from '../button';

export function GamePad({
  className,
}) {
  return (
    <div className={classNames('game-pad', className)}>
      <div className="action-controls">
        <Button className="pass">不出</Button>
        <Button className="confirm">确认</Button>
      </div>
      <div className="card-container">
        card
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
