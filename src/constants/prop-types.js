import PropTypes from 'prop-types';

export const UserInfo = PropTypes.shape({
  login: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});
