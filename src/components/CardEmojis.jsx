import emojiAmarelo from "../assets/emoji-amarelo.png";
import emojiLaranja from "../assets/emoji-laranja.png";
import "./CardEmojis.css";

export default function CardEmojis() {
  return (
    <>
      {/* Emojis do topo */}
      <img
        src={emojiLaranja}
        alt=""
        className="emoji emoji-laranja-top"
        draggable="false"
      />
      <img
        src={emojiAmarelo}
        alt=""
        className="emoji emoji-amarelo-top"
        draggable="false"
      />
      {/* Emoji do canto inferior direito */}
      <img
        src={emojiLaranja}
        alt=""
        className="emoji emoji-laranja-bottom"
        draggable="false"
      />
    </>
  );
}
