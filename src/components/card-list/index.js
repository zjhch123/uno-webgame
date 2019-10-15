import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';
import { Card } from './card';
import {
  CardType,
  CardColor,
  CardValue,
  Size,
} from '../../constants/card';

const SizeCssVariable = { '--width': `${Size.width}px`, '--height': `${Size.height}px` };

export function CardList({
  className,
  list,
}) {
  const [moveLeft, setMoveLeft] = useState(0);

  useEffect(() => {
    if (list.length < 7) {
      setMoveLeft(70);
    } else if (list.length < 14) {
      setMoveLeft(50);
    } else {
      setMoveLeft(30);
    }
  }, [list.length]);

  const width = (list.length - 1) * moveLeft + Size.width;

  return (
    <div className={classNames('card-list', className)} style={{ ...SizeCssVariable, width }}>
      {
        list.map(({ id, ...props }, index) => (
          <Card {...props} key={id} style={{ left: index * moveLeft }} />
        ))
      }
    </div>
  );
}

CardList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequire,
    type: PropTypes.oneOf(_.values(CardType)).isRequired,
    color: PropTypes.oneOf(_.values(CardColor)),
    value: PropTypes.oneOf(_.values(CardValue)),
  })),
};

CardList.defaultProps = {
  className: '',
  list: [],
};
