import "./QuestionHeader.css";

export default function QuestionHeader({ type, title }) {
  let headerText = "";
  let extraClass = "";

  if (title) {
    headerText = title;
    if (title === "O que é Estética Literária?") {
      extraClass = "header-large-title";
    }
  } else if (type === "question") {
    headerText = "Questões";
  } else if (type === "explanation") {
    headerText = "Explicação";
  } else {
    headerText = "";
  }

  return (
    <div className={`header-wrapper${extraClass ? " " + extraClass : ""}`}>
      <div
        className={`header-shadow${extraClass ? " " + extraClass : ""}`}
      ></div>
      <div className={`header-main${extraClass ? " " + extraClass : ""}`}>
        {headerText}
      </div>
    </div>
  );
}
