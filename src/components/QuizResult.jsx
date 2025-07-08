import "./QuizCard.css";

export default function QuizResult({ score, total, onRestart }) {
  return (
    <div className="quiz-card">
      <h2 className="quiz-question">Quiz finalizado!</h2>
      <p>
        Sua pontuação: <b>{score}</b> de <b>{total}</b>
      </p>
      <p>Parabéns por completar o quiz!</p>
      <button className="next-btn" onClick={onRestart}>
        Voltar ao Início
      </button>
    </div>
  );
}
