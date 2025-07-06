import { useState } from "react";
import questions from "./data/questions";
import QuizCard from "./components/QuizCard";
import ExplanationCard from "./components/ExplanationCard";
import QuizResult from "./components/QuizResult";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredWrong, setAnsweredWrong] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (selectedIdx) => {
    if (selectedIdx === questions[current].correctIndex) {
      setScore((s) => s + 1);
      // Avança direto para próxima questão se acertar
      setShowExplanation(false);
      setAnsweredWrong(false);
      setCurrent((c) => c + 1);
    } else {
      // Só mostra explicação se errar
      setAnsweredWrong(true);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    setAnsweredWrong(false);
    setCurrent((c) => c + 1);
  };

  if (current >= questions.length) {
    return <QuizResult score={score} total={questions.length} />;
  }

  return (
    <div className="quiz-wrapper">
      {showExplanation && answeredWrong ? (
        <ExplanationCard
          explanation={questions[current].explanation}
          onNext={handleNext}
          current={current + 1}
          total={questions.length}
        />
      ) : (
        <QuizCard
          questionObj={questions[current]}
          current={current + 1}
          total={questions.length}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default App;
