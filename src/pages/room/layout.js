import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Enemy } from '../../components/enemy';
import { getEnemiesClassTypeList } from '../../helper/utils';


export function Layout({
  enemies,
}) {
  const sortedEnemies = enemies.sort(({ id: a }, { id: b }) => a - b);

  const enemiesClassTypeList = useMemo(() => getEnemiesClassTypeList(enemies.length),
    [enemies.length]);

  return (
    <div className={classNames('layout', `layout-${enemies.length}`)}>
      {
        sortedEnemies.map((enemy, index) => {
          const { className, type } = enemiesClassTypeList[index];
          return (
            <div className={className}>
              <Enemy
                key={enemy.id}
                type={type}
              />
            </div>
          );
        })
      }
    </div>
  );
}

Layout.propTypes = {
  enemies: PropTypes.arrayOf(PropTypes.shape({})),
};

Layout.defaultProps = {
  enemies: [],
};
