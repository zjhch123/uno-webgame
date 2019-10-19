import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Enemy } from '../../components/enemy';
import { Layout as LayoutOptions } from '../../constants/layout';


export function Layout({
  enemies,
}) {
  const sortedEnemies = enemies.sort(({ id: prev }, { id: next }) => prev - next);
  const options = LayoutOptions[enemies.length];

  const renderEnemy = (enemy, index) => {
    const { id, cardNum } = enemy;
    const { className, type } = options[index];
    return (
      <div className={className} key={id}>
        <Enemy type={type} cardNum={cardNum} />
      </div>
    );
  };

  return (
    <div className={classNames('layout', `layout-${enemies.length}`)}>
      {sortedEnemies.map(renderEnemy)}
    </div>
  );
}

Layout.propTypes = {
  enemies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardNum: PropTypes.number.isRequired,
  })),
};

Layout.defaultProps = {
  enemies: [],
};
