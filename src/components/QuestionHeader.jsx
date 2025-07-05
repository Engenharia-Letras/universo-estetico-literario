import "./QuestionHeader.css";

export default function QuestionHeader({ type }) {
  return (
    <div className="header-wrapper">
      <div className="header-shadow"></div>
      <div className="header-main">
        {type === "question" ? `Questão` : `Explicação`}
      </div>
    </div>
  );
}
