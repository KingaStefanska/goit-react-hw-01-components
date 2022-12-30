import PropTypes from 'prop-types';
import css from './Profile.module.css';

const UserProfile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.descriptions}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      {[
        [1, 'Followers', stats.followers],
        [2, 'Views', stats.views],
        [3, 'Likes', stats.likes],
      ].map(([id, text, value]) => (
        <li key={id} className={css.item}>
          <span className={css.label}> {text} </span>
          <span className={css.quantity}> {value} </span>
        </li>
      ))}
    </ul>
  </div>
);

UserProfile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default UserProfile;
