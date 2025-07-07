import { useState } from "react";
import questions from "./data/questions";
import introScreens from "./data/introScreens";
import InfoCard from "./components/InfoCard";
import QuizCard from "./components/QuizCard";
import ExplanationCard from "./components/ExplanationCard";
import QuizResult from "./components/QuizResult";
import WelcomeScreen from "./components/WelcomeScreen";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  // Estado para navegação nas telas iniciais
  const [introStep, setIntroStep] = useState(0);
  // Estados do quiz
  const [current, setCurrent] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredWrong, setAnsweredWrong] = useState(false);
  const [score, setScore] = useState(0);

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />;
  }

  // Se ainda tem telas iniciais para mostrar
  if (introStep < introScreens.length) {
    return (
      <div className="quiz-wrapper">
        <InfoCard
          title={introScreens[introStep].title}
          text={introScreens[introStep].text}
          onNext={() => setIntroStep((s) => s + 1)}
          onBack={introStep > 0 ? () => setIntroStep((s) => s - 1) : undefined}
        />
      </div>
    );
  }

  // Se chegou ao fim do quiz
  if (current >= questions.length) {
    return <QuizResult score={score} total={questions.length} />;
  }

  // Durante o quiz
  return (
    <div className="quiz-wrapper">
      {showExplanation && answeredWrong ? (
        <ExplanationCard
          explanation={questions[current].explanation}
          onNext={() => {
            setShowExplanation(false);
            setAnsweredWrong(false);
            setCurrent((c) => c + 1);
          }}
        />
      ) : (
        <QuizCard
          questionObj={questions[current]}
          onSelect={(selectedIdx) => {
            if (selectedIdx === questions[current].correctIndex) {
              setScore((s) => s + 1);
              // Vai direto para próxima questão se acertar
              setShowExplanation(false);
              setAnsweredWrong(false);
              setCurrent((c) => c + 1);
            } else {
              setAnsweredWrong(true);
              setShowExplanation(true);
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
