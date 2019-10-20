import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import './style.scss';

export function SwitchColor({
  show,
}) {
  const renderItem = (color) => (
    <div className={classNames('item', `item-${color}`)}>
      <label htmlFor={color} className="label">
        <input id={color} type="radio" name="color" />
        <div className="block" />
      </label>
    </div>
  );

  return (
    <Modal
      header="转换成哪个颜色?"
      lassName="switch-color"
      show={show}
    >
      <div className="switch-color-container">
        {renderItem('red')}
        {renderItem('green')}
        {renderItem('yellow')}
        {renderItem('blue')}
      </div>
    </Modal>
  );
}

SwitchColor.propTypes = {
  show: PropTypes.bool,
};

SwitchColor.defaultProps = {
  show: false,
};
