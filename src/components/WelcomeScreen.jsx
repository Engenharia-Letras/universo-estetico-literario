import "./WelcomeScreen.css";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-wrapper">
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
