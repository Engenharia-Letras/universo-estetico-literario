import QuestionHeader from "./QuestionHeader";
import "./QuizCard.css";
import CardEmojis from "./CardEmojis";

export default function ExplanationCard({
  explanation,
  onNext,
  current,
  total,
}) {
  return (
    <div className="quiz-card">
      <CardEmojis />
      <QuestionHeader type="explanation" current={current} total={total} />
      {/* <h2 className="quiz-question">Explicação</h2> */}
      <div className="explanation-text">{explanation}</div>
      {/* <br /> */}
      <button className="next-btn" onClick={onNext}>
        Próxima
      </button>
    </div>
  );
}
