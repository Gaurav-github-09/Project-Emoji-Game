// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  return (
    <nav className="navigation">
      <div className="imgcont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logoName">Emoji Game</h1>
      </div>
      {gameStatus && (
        <>
          <div className="scoreCard">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        </>
      )}
    </nav>
  )
}

export default NavBar
