/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

function Wrapper({
  type,
  children,
  onClick,
  ...rest
}) {
  const preventDefaultClick = (ev) => {
    ev.preventDefault();
    onClick(ev);
    return false;
  };

  return type === 'link'
    ? <a href="#" onClick={preventDefaultClick} {...rest}>{children}</a>
    : <button type={type} onClick={onClick} {...rest}>{children}</button>;
}

export function Button({
  type,
  children,
  className,
  onClick,
  ...rest
}) {
  return (
    <Wrapper
      type={type}
      className={classNames('button', className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}

Wrapper.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  children: null,
  className: null,
  onClick: _.noop,
};
