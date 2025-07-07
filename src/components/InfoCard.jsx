import QuestionHeader from "./QuestionHeader";
import "./QuizCard.css";
import CardEmojis from "./CardEmojis";

export default function InfoCard({ text, onNext, onBack, title }) {
  return (
    <div className="quiz-card">
      <CardEmojis />
      <QuestionHeader title={title} />
      <div className="explanation-text">{text}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            Voltar
          </button>
        )}
        {onNext && (
          <button className="next-btn" onClick={onNext}>
            Próxima
          </button>
        )}
      </div>
    </div>
  );
}
