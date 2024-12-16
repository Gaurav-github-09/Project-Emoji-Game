import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {newEmojisList: [], topScore: 0, gameStatus: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {newEmojisList, topScore} = this.state

    const {emojisList} = this.props

    let highScore = topScore

    const currentScore = newEmojisList.length

    if (currentScore > highScore) {
      highScore = currentScore
    }

    if (newEmojisList.includes(id)) {
      this.setState({
        gameStatus: false,
        topScore: highScore,
      })
    } else {
      if (emojisList.length - 1 === newEmojisList.length) {
        this.setState({topScore: emojisList.length, gameStatus: false})
      }

      this.setState(prevIds => ({
        newEmojisList: [...prevIds.newEmojisList, id],
      }))
    }
  }

  gameResult = () => {
    this.setState({
      gameStatus: true,
      newEmojisList: [],
    })
  }

  render() {
    const {newEmojisList, topScore, gameStatus} = this.state

    const score = newEmojisList.length

    const emojisList = this.shuffledEmojisList()

    return (
      <div className="bgcont">
        <NavBar
          gameStatus={gameStatus}
          key={newEmojisList.length}
          score={score}
          topScore={topScore}
        />
        <div className="card">
          {gameStatus && (
            <>
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  onClickEmoji={this.onClickEmoji}
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                />
              ))}
            </>
          )}
          {!gameStatus && (
            <>
              <WinOrLoseCard
                gameWonOrLost={this.gameResult}
                totalLength={emojisList.length}
                key={emojisList.length}
                score={newEmojisList.length}
              />
            </>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
