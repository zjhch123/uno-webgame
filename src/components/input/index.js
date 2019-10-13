import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

export function Input({
  className,
  onChange,
  ...rest
}) {
  const handleChange = (e) => {
    const { target: { value } } = e;
    onChange(value, e);
  };

  return (
    <div className={className}>
      <input {...rest} className="input" onChange={handleChange} />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: null,
  onChange: _.noop,
};
