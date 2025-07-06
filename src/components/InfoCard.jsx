import QuestionHeader from "./QuestionHeader";
import "./QuizCard.css"; // Aproveita o mesmo estilo do card

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
