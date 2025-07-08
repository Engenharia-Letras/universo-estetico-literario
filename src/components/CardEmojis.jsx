import emojiAmarelo from "../assets/emoji-amarelo.png";
import emojiLaranja from "../assets/emoji-laranja.png";
import "./CardEmojis.css";

export default function CardEmojis({ isEstetica }) {
  return (
    <>
      <img
        src={emojiLaranja}
        alt=""
        className={`emoji emoji-laranja-top${isEstetica ? " estetica" : ""}`}
        draggable="false"
      />
      <img
        src={emojiAmarelo}
        alt=""
        className={`emoji emoji-amarelo-top${isEstetica ? " estetica" : ""}`}
        draggable="false"
      />
      <img
        src={emojiLaranja}
        alt=""
        className={`emoji emoji-laranja-bottom${isEstetica ? " estetica" : ""}`}
        draggable="false"
      />
    </>
  );
}
