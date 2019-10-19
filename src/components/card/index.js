import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import classNames from 'classnames';
import {
  CardType,
  CardColor,
  CardValue,
  CardContent,
} from '../../constants/card';

import './style.scss';

export function Card({
  type,
  color,
  value,
  style,
}) {
  const className = classNames({
    card: true,
    [`type-${type}`]: true,
    [`card-value-${value}`]: true,
    [`color-${color}`]: color !== CardColor.None,
  });

  const renderNormal = () => (
    <>
      <span className="card-left-top">{CardContent[value]}</span>
      <span className="card-center">{CardContent[value]}</span>
    </>
  );

  const renderContainer = () => {
    switch (type) {
      case CardType.Unknown: return (<span className="card-center font-small">UNO</span>);
      case CardType.Normal: return renderNormal();
      default: return null;
    }
  };

  return (
    <div className={className} style={style}>
      <div className="card-content">
        <div className="card-mask">
          { renderContainer() }
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(_.values(CardType)).isRequired,
  color: PropTypes.oneOf(_.values(CardColor)),
  value: PropTypes.oneOf(_.values(CardValue)),
  style: PropTypes.shape({}),
};

Card.defaultProps = {
  color: CardColor.None,
  value: CardValue.None,
  style: {},
};
