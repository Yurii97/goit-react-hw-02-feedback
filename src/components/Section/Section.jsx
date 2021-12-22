import { SectionFeedback } from './Sectoin.styled';

function Section({ title, children }) {
  return (
    <SectionFeedback>
      {title && <h2>{title}</h2>}
      {children}
    </SectionFeedback>
  );
}

export default Section;
