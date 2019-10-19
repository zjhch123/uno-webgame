import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';
import { Button } from '../button';
import { Type as EnemyType } from '../../constants/enemy';
import { CardList } from '../card-list';
import { generateEnemyCardList, parseEnemyTypeToCardListType } from '../../helper/utils';

import './style.scss';

export function Enemy({
  className,
  cardNum,
  type,
}) {
  const cardListType = useMemo(() => parseEnemyTypeToCardListType(type), [type]);
  const cardList = useMemo(() => generateEnemyCardList(cardNum), [cardNum]);

  const renderActions = () => (
    <div className="enemy-actions">
      <Button className="enemy-uno" onClick={_.noop}>UNO?</Button>
    </div>
  );

  const renderExtra = () => cardNum > 7 && (
    <div className="enemy-card-extra">
      <span>+</span>
      <span>{cardNum - 7}</span>
    </div>
  );

  const renderCardList = () => (
    <div className={classNames('enemy-card-list-container', `enemy-card-list-container-${type}`)}>
      <CardList
        className={classNames('enemy-card-list')}
        list={cardList}
        scale={2.5}
        type={cardListType}
      />
      {renderExtra()}
    </div>
  );

  return (
    <div className={classNames(className, 'enemy', `enemy-type-${type}`)}>
      {renderActions()}
      {renderCardList()}
    </div>
  );
}

Enemy.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(_.values(EnemyType)).isRequired,
  cardNum: PropTypes.number,
};

Enemy.defaultProps = {
  className: null,
  cardNum: 0,
};
