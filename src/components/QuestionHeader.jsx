import "./QuestionHeader.css";

export default function QuestionHeader({ type, title }) {
  let headerText = "";
  if (title) {
    headerText = title;
  } else if (type === "question") {
    headerText = "Questão";
  } else if (type === "explanation") {
    headerText = "Explicação";
  } else {
    headerText = ""; // fallback
  }

  return (
    <div className="header-wrapper">
      <div className="header-shadow"></div>
      <div className="header-main">{headerText}</div>
    </div>
  );
}
