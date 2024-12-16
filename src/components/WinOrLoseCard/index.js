// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, totalLength, gameWonOrLost} = props

  const totalLengthStatus = score === totalLength

  const buttonClicked = () => {
    gameWonOrLost()
  }

  const imageUrl = totalLengthStatus
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStat = totalLengthStatus ? 'You Won' : 'You Lose'

  const scoreText = totalLengthStatus ? 'Best Score' : 'Score'

  return (
    <div className="winOrLoseCard">
      <div className="winningcard">
        <h1 className="your">{gameStat}</h1>
        <div>
          <p className="best">{scoreText}</p>
          <p className="best scoreColor">{score}/12</p>
          <button onClick={buttonClicked} className="button" type="button">
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img className="imageWonLose" alt="win or lose" src={imageUrl} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
