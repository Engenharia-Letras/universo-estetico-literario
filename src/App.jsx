import { useState } from "react";
import questions from "./data/questions";
import QuizCard from "./components/QuizCard";
import ExplanationCard from "./components/ExplanationCard";
import QuizResult from "./components/QuizResult";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (selectedIdx) => {
    if (selectedIdx === questions[current].correctIndex) {
      setScore((s) => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    setCurrent((c) => c + 1);
  };

  if (current >= questions.length) {
    return <QuizResult score={score} total={questions.length} />;
  }

  return (
    <div className="quiz-wrapper">
      {!showExplanation ? (
        <QuizCard questionObj={questions[current]} onSelect={handleSelect} />
      ) : (
        <ExplanationCard
          explanation={questions[current].explanation}
          onNext={handleNext}
          current={current + 1}
          total={questions.length}
        />
      )}
    </div>
  );
}
export default App;
