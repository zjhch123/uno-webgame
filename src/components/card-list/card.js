import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import classNames from 'classnames';
import {
  CardType,
  CardColor,
  CardValue,
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

  const renderNormal = () => {
    switch (value) {
      case CardValue.Zero:
      case CardValue.One:
      case CardValue.Two:
      case CardValue.Three:
      case CardValue.Four:
      case CardValue.Five:
      case CardValue.Six:
      case CardValue.Seven:
      case CardValue.Eight:
      case CardValue.Night:
        return (
          <>
            <span className="card-left-top">{value}</span>
            <span className="card-center">{value}</span>
          </>
        );
      case CardValue.Add2: return (
        <>
          <span className="card-left-top">+2</span>
          <span className="card-center">+2</span>
        </>
      );
      case CardValue.Add4: return (
        <>
          <span className="card-left-top">+4</span>
          <span className="card-center">+4</span>
        </>
      );
      case CardValue.Ban: return (
        <>
          <span className="card-left-top" role="img" aria-label="ban">🚫</span>
          <span className="card-center" role="img" aria-label="ban">🚫</span>
        </>
      );
      case CardValue.ChangeColor: return (
        <>
          <span className="card-left-top" role="img" aria-label="change-color">🍭</span>
          <span className="card-center" role="img" aria-label="change-color">🍭</span>
        </>
      );
      case CardValue.Revert: return (
        <>
          <span className="card-left-top" role="img" aria-label="revert">🔄</span>
          <span className="card-center" role="img" aria-label="revert">🔄</span>
        </>
      );
      default: return null;
    }
  };

  const renderContainer = () => {
    switch (type) {
      case CardType.Unknown: return (
        <>
          <span className="card-center font-small">UNO</span>
        </>
      );
      case CardType.Normal: return (
        <>
          { renderNormal() }
        </>
      );
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
