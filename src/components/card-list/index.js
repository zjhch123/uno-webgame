import React, { useState, useEffect, useMemo } from 'react';
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
import { Type } from '../../constants/card-list';

const InitialZIndex = 100;

export function CardList({
  className,
  list,
  scale,
  type,
}) {
  const [marginLength, setMarginLength] = useState(0);

  const options = useMemo(() => {
    const cardListSize = (list.length - 1) * marginLength + Size.width;

    switch (type) {
      case Type.Left:
      case Type.Right:
        return {
          marginKey: 'top',
          direction: type === Type.Left ? -1 : 1,
          style: {
            '--width': `${Size.height}px`,
            '--height': `${Size.width}px`,
            height: cardListSize,
          },
        };
      case Type.Top:
      case Type.Bottom:
        return {
          marginKey: 'left',
          direction: 1,
          style: {
            '--width': `${Size.width}px`,
            '--height': `${Size.height}px`,
            width: cardListSize,
          },
        };
      default: return {};
    }
  }, [type, list.length, marginLength]);

  const cardListClassName = useMemo(() => classNames(className, 'card-list', {
    'card-list-left': type === Type.Left,
    'card-list-right': type === Type.Right,
    'card-list-top': type === Type.Top,
    'card-list-bottom': type === Type.Bottom,
  }), [type, className]);

  useEffect(() => {
    if (list.length < 7) {
      setMarginLength(70 / scale);
    } else if (list.length < 14) {
      setMarginLength(50 / scale);
    } else {
      setMarginLength(30 / scale);
    }
  }, [list.length, scale]);

  return (
    <div className={cardListClassName} style={options.style}>
      {
        list.map(({ id, ...props }, index) => (
          <Card
            key={id}
            style={{
              [options.marginKey]: index * marginLength,
              zIndex: index * options.direction + InitialZIndex,
            }}
            {...props}
          />
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
  scale: PropTypes.number,
  type: PropTypes.oneOf(_.values(Type)),
};

CardList.defaultProps = {
  className: '',
  list: [],
  scale: 1,
  type: Type.Bottom,
};
