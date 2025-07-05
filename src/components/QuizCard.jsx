import QuestionHeader from "./QuestionHeader";
import OptionButton from "./OptionButton";
import "./QuizCard.css";

export default function QuizCard({ questionObj, onSelect }) {
  return (
    <div className="quiz-card">
      <QuestionHeader type="question" />
      <h2 className="quiz-question">{questionObj.question}</h2>
      {questionObj.options.map((text, idx) => (
        <OptionButton key={idx} index={idx} text={text} onSelect={onSelect} />
      ))}
    </div>
  );
}
