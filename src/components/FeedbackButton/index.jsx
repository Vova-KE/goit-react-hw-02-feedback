import styles from './style.module.css';

const FeedbackButton = () => (
    <div className={styles.buttonWrap}>
        <button className={styles.button}>
            Good
        </button>
        <button className={styles.button}>
            Neutral
        </button>
        <button className={styles.button}>
            Bad
        </button>
    </div>
);

export default FeedbackButton;