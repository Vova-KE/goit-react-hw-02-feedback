import HeaderTitle from './Header'
import FeedbackButton from './FeedbackButton';
import Statistics from './Statistics';

import styled from './style.module.css';

const state = {
  good: 251,
  neutral: 122,
  bad: 31
}

export const App = () => {
  return (
    <div className={styled.container}>
      <HeaderTitle />
      <FeedbackButton />
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
      />
    </div>
  );
};
