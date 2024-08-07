import './index.css'

const NavBar = ({showScores, score, totalScore}) => (
  <div className="nav-bg-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="nav-image"
      />
      <h1 className="nav-heading">Emoji Game</h1>
    </div>
    {showScores && (
      <div className="scores-container">
        <p className="score-heading">Score: {score}</p>
        <p className="score-heading">Top Score: {totalScore}</p>
      </div>
    )}
  </div>
)

export default NavBar
