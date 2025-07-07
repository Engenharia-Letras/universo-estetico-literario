import QuestionHeader from "./QuestionHeader";
import OptionButton from "./OptionButton";
import "./QuizCard.css";
import CardEmojis from "./CardEmojis";

export default function QuizCard({ questionObj, onSelect }) {
  return (
    <div className="quiz-card">
      <CardEmojis />
      <QuestionHeader type="question" />
      <div className="quiz-card-content">
        <h2 className="quiz-question">{questionObj.question}</h2>
        {questionObj.options.map((text, idx) => (
          <OptionButton key={idx} index={idx} text={text} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
