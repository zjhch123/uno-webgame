import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';
import { Button } from '../button';
import { Type as EnemyType } from '../../constants/enemy';
import { Type as CardListType } from '../../constants/card-list';
import { CardList } from '../card-list';

import { EnemyCards } from '../../mock/all-cards';

import './style.scss';

export function Enemy({
  className,
  type,
}) {
  const cardListType = useMemo(() => {
    switch (type) {
      case EnemyType.Left:
        return CardListType.Left;
      case EnemyType.Right:
        return CardListType.Right;
      case EnemyType.Top:
        return CardListType.Top;
      default:
        return CardListType.Bottom;
    }
  }, [type]);

  const renderActions = () => (
    <div className="enemy-actions">
      <Button className="enemy-uno" onClick={_.noop}>UNO?</Button>
    </div>
  );

  const renderCardList = () => (
    <div className={classNames('enemy-card-list-container', `enemy-card-list-container-${type}`)}>
      <CardList
        className={classNames('enemy-card-list')}
        list={EnemyCards.slice(0, 7)}
        scale={2.5}
        type={cardListType}
      />
      { EnemyCards.length > 7 && (
        <div className="enemy-card-extra">
          +
          {EnemyCards.length - 7}
        </div>
      )}
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
};

Enemy.defaultProps = {
  className: null,
};
