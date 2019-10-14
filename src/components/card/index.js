import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import classNames from 'classnames';
import {
  CardType,
  CardColor,
  FunctionalType,
  CardValue,
} from '../../constants/card';
import './style.scss';

export function Card({
  type,
  color,
  functionalType,
  value,
}) {
  const className = classNames({
    card: true,
    [`type-${type}`]: true,
    [`color-${color}`]: color !== CardColor.None,
    [`function-type-${functionalType}`]: functionalType !== FunctionalType.None,
  });

  const renderFunctional = () => {
    switch (functionalType) {
      case FunctionalType.Add2: return (
        <>
          <span className="card-left-top">+2</span>
          <span className="card-center">+2</span>
        </>
      );
      case FunctionalType.Add4: return (
        <>
          <span className="card-left-top">+4</span>
          <span className="card-center">+4</span>
        </>
      );
      case FunctionalType.Ban: return (
        <>
        </>
      );
      case FunctionalType.ChangeColor: return (
        <>
        </>
      );
      case FunctionalType.Revert: return (
        <>
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
      case CardType.Functional: return (
        <>
          { renderFunctional() }
        </>
      );
      case CardType.Normal: return (
        <>
          <span className="card-left-top">{value}</span>
          <span className="card-center">{value}</span>
        </>
      );
      default: return null;
    }
  };

  return (
    <div className={className}>
      <div className="card-container">
        { renderContainer() }
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(_.values(CardType)).isRequired,
  color: PropTypes.oneOf(_.values(CardColor)),
  functionalType: PropTypes.oneOf(_.values(FunctionalType)),
  value: PropTypes.oneOf(_.values(CardValue)),
};

Card.defaultProps = {
  color: CardColor.None,
  functionalType: FunctionalType.None,
  value: CardValue.None,
};
