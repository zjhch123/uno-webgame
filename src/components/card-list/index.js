import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';
import { Card } from '../card';
import {
  CardType,
  CardColor,
  CardValue,
} from '../../constants/card';
import { Type } from '../../constants/card-list';
import { getCardListOptions } from '../../helper/utils';

import './style.scss';

const InitialZIndex = 50;

export function CardList({
  className,
  list,
  scale,
  type,
}) {
  const [marginLength, setMarginLength] = useState(0);

  const options = useMemo(() => getCardListOptions(type, list.length, marginLength),
    [type, list.length, marginLength]);

  useEffect(() => {
    if (list.length < 7) {
      setMarginLength(70 / scale);
    } else if (list.length < 14) {
      setMarginLength(50 / scale);
    } else {
      setMarginLength(30 / scale);
    }
  }, [list.length, scale]);

  const getCardStyle = useCallback((index) => ({
    [options.marginKey]: index * marginLength,
    zIndex: index * options.direction + InitialZIndex,
  }), [marginLength, options.direction, options.marginKey]);

  return (
    <div className={classNames(className, 'card-list', `card-list-${type}`)} style={options.style}>
      {
        list.map(({ id, ...props }, index) => (
          <Card key={id} style={getCardStyle(index)} {...props} />
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
