import css from './Feedback.module.css';

const Feedback = ({ feedbackStatistics, totalFeedback, positiveFeedback }) => {
  if (feedbackStatistics === 0) return 'Sory';
  return (
    <ul>
      <li>Good: {feedbackStatistics.good}</li>
      <li>Neutral: {feedbackStatistics.neutral}</li>
      <li>Bad: {feedbackStatistics.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
