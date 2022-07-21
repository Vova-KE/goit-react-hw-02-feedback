import PropTypes from 'prop-types';
import styles from './style.module.css';

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = good / total * 100;

    return (
        <div>
            <p className={styles.statistics}>
                Statistics
            </p>
            <div>
                <p className={styles.stats}>Good: {good}</p>
                <p className={styles.stats}>Neutral: {neutral}</p>
                <p className={styles.stats}>Bad: {bad}</p>
                <p className={styles.stats}>Total: {total}</p>
                <p className={styles.stats}>Positive feedback:  {Math.round(average)}%</p>
            </div>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}

export default Statistics;