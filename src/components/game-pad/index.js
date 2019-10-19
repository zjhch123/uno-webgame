import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

import { Button } from '../button';
import { CardList } from '../card-list';
import { AllCards } from '../../mock/all-cards';

import { parseCardCode } from '../../helper/utils';

import './style.scss';

export function GamePad({
  className,
}) {
  const sortedCards = _.chain(AllCards)
    .sortBy(({ cardCode }) => cardCode)
    .map(({ id, cardCode }) => ({
      id,
      ...parseCardCode(cardCode),
    }))
    .value();

  return (
    <div className={classNames('game-pad', className)}>
      <div className="action-controls">
        <Button className="action pass">不出</Button>
        <Button className="action confirm">确认</Button>
        <Button className="action uno">UNO!</Button>
      </div>
      <div className="cards-container">
        <CardList list={sortedCards} />
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
