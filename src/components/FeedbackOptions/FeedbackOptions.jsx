function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul>
        {Object.keys(options).map(e => (
          <li key={e}>
            <button type="button" onClick={() => onLeaveFeedback(e)}>
              {e}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FeedbackOptions;
