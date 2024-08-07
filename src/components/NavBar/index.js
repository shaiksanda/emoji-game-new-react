import './index.css'

const NavBar = ({showScores, score, totalScore}) => (
  <div className="nav-bg-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="logo"
        className="nav-image"
      />
      <h1 className="nav-heading">Emoji Game</h1>
    </div>
    {showScores && (
      <div className="scores-container">
        <h1 className="score-heading">
          Score: <span>{score}</span>
        </h1>
        <h1 className="score-heading">
          Total Score: <span>{totalScore}</span>
        </h1>
      </div>
    )}
  </div>
)

export default NavBar
