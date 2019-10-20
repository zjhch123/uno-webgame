import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

import { Button } from '../button';

import './style.scss';

export class Modal extends React.Component {
  modal() {
    const {
      className,
      header,
      children,
      submitButtonText,
      onSubmitButtonClick,
      cancelButtonText,
      onCancelButtonClick,
      show,
    } = this.props;

    return show && (
      <div className={classNames('modal', className)}>
        <div className="modal-container">
          <div className="modal-header">
            {header}
          </div>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <Button className="submit-button" onClick={onSubmitButtonClick}>{submitButtonText}</Button>
            <Button className="cancel-button" onClick={onCancelButtonClick}>{cancelButtonText}</Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.modal(),
      document.body,
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.node,
  onSubmitButtonClick: PropTypes.func,
  onCancelButtonClick: PropTypes.func,
  submitButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  show: PropTypes.bool,
};

Modal.defaultProps = {
  className: null,
  header: '',
  children: null,
  onSubmitButtonClick: _.noop,
  onCancelButtonClick: _.noop,
  submitButtonText: '确认',
  cancelButtonText: '取消',
  show: false,
};
