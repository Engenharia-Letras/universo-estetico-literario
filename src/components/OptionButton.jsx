import "./OptionButton.css";

export default function OptionButton({ index, text, selected, onSelect }) {
  const isSelected = selected === index;
  return (
    <button
      className={`option-button ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(index)}
    >
      {text}
    </button>
  );
}
