import QuestionHeader from "./QuestionHeader";
import "./QuizCard.css";

export default function InfoCard({ text, onNext, title }) {
  return (
    <div className="quiz-card">
      <QuestionHeader title={title} />
      <div className="explanation-text">{text}</div>
      {onNext && (
        <button className="next-btn" onClick={onNext}>
          Próxima
        </button>
      )}
    </div>
  );
}
