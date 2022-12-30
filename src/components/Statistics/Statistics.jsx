import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const UserStats = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}> {label}</span>
            <span className={css.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

UserStats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default UserStats;
