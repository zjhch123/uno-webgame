import PropTypes from 'prop-types';
import UserStatus from './user-status';

export const UserInfo = PropTypes.shape({
  isLogin: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  uid: PropTypes.number.isRequired,
  status: PropTypes.oneOf([UserStatus.Game, UserStatus.Home]),
});
