import "./OptionButton.css";

export default function OptionButton({ index, text, onSelect }) {
  return (
    <button className="option-button" onClick={() => onSelect(index)}>
      {text}
    </button>
  );
}
