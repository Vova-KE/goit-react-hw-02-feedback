import React, { Component } from "react";
import styles from './style.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleButtonGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleButtonNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleButtonBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        if (this.state.good) {
            const average = this.state.good / this.countTotalFeedback() * 100;
            return Math.round(average) + '%';
        } else {
            return 0;
        }
    };

    render() {
        return (
            <div className={styles.container}>
                <p className={styles.title}>
                    Please leave feedback
                </p>
                <div className={styles.buttonWrap}>
                    <button className={styles.button} onClick={this.handleButtonGood}>
                        Good
                    </button>
                    <button className={styles.button} onClick={this.handleButtonNeutral}>
                        Neutral
                    </button>
                    <button className={styles.button} onClick={this.handleButtonBad}>
                        Bad
                    </button>
                </div>
                <p className={styles.statistics}>
                    Statistics
                </p>
                <div>
                    <p className={styles.stats}>Good: {this.state.good}</p>
                    <p className={styles.stats}>Neutral: {this.state.neutral}</p>
                    <p className={styles.stats}>Bad: {this.state.bad}</p>
                    <p className={styles.stats}>Total: {this.countTotalFeedback()}</p>
                    <p className={styles.stats}>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
                </div>
            </div>
        )
    };
};

export default Feedback;