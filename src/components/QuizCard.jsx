import { useState } from "react";
import "./QuizCard.css";
import QuestionHeader from "./QuestionHeader";
import OptionButton from "./OptionButton";

export default function QuizCard() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const question =
    "1. Qual obra de Machado de Assis é considerada uma das mais importantes da literatura brasileira por sua crítica social e uso inovador da ironia?";

  const options = [
    "a) Dom Casmurro",
    "b) Memórias Póstumas de Brás Cubas",
    "c) O Primo Basílio",
    "d) Senhora",
  ];

  return (
    <div className="quiz-wrapper">
      <div className="quiz-content">
        <QuestionHeader />

        <div className="quiz-card">
          <br />
          <h2 className="quiz-question">{question}</h2>

          {options.map((text, index) => (
            <OptionButton
              key={index}
              index={index}
              text={text}
              selected={selected}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
