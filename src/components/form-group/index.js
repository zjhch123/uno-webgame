import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function FormGroup({
  htmlFor,
  label,
  className,
  children,
}) {
  return (
    <div className={classNames('form-group', className)}>
      <label htmlFor={htmlFor}>{label}</label>
      <div>
        {children}
      </div>
    </div>
  );
}

FormGroup.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormGroup.defaultProps = {
  htmlFor: '',
  className: null,
};
