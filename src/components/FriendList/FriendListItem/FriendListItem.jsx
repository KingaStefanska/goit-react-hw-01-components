import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.friend__item}>
      <span
        className={clsx(
          css.friends__status,
          isOnline ? css.friend__online : css.friend__offline
        )}
      ></span>
      <img className={css.friend__avatar} src={avatar} alt={name} width="50" />
      <p className={css.friends__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
