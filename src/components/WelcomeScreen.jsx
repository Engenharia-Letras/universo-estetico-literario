import "./WelcomeScreen.css";
import emojiAzul from "../assets/emoji-azul.png";
import emojiAmarelo from "../assets/emoji-amarelo.png";
import emojiLaranja from "../assets/emoji-laranja.png";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-wrapper">
      {/* Emoji azul (direita) */}
      <img
        src={emojiAzul}
        alt="Emoji sorridente azul"
        className="emoji emoji-azul"
      />
      {/* Emoji amarelo (esquerda, por baixo do laranja) */}
      <img
        src={emojiAmarelo}
        alt="Emoji sorridente amarelo"
        className="emoji emoji-amarelo"
      />
      {/* Emoji laranja (esquerda, mais acima) */}
      <img
        src={emojiLaranja}
        alt="Emoji sorridente laranja"
        className="emoji emoji-laranja"
      />
      <div className="welcome-stack">
        <div className="welcome-banner-pair">
          <div className="welcome-banner-shadow universo-shadow"></div>
          <div className="welcome-banner universo">Universo</div>
        </div>
        <div className="welcome-banner-pair">
          <div className="welcome-banner estetico">Estético</div>
        </div>
        <div className="welcome-banner-pair">
          <div className="welcome-banner-shadow literario-shadow"></div>
          <div className="welcome-banner literario">Literário</div>
        </div>
      </div>
      <button className="start-btn" onClick={onStart}>
        Começar
      </button>
    </div>
  );
}
