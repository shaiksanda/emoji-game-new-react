import './index.css'

const WinOrLoseCard = ({isWin, onPlayAgain, totalScore}) => (
  <div className={`card ${isWin ? 'win' : 'lose'}`}>
    {isWin ? (
      <div className="message">
        <div>
          <h1 className="heading">You Won</h1>
          <p className="heading">Best Score</p>
          <p className="score">12/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    ) : (
      <div className="message">
        <div>
          <h1 className="heading">You Lose</h1>
          <p className="heading">Score</p>
          <p className="score">{totalScore}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="logo"
        />
      </div>
    )}
  </div>
)

export default WinOrLoseCard
