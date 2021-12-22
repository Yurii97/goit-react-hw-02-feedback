import { BtnList } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <BtnList>
        {Object.keys(options).map(e => (
          <li key={e}>
            <button type="button" onClick={() => onLeaveFeedback(e)}>
              {e}
            </button>
          </li>
        ))}
      </BtnList>
    </>
  );
}

export default FeedbackOptions;
