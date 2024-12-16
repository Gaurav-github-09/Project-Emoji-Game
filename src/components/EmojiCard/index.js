// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const emojiClicked = () => {
    onClickEmoji(id)
  }

  return (
    <li className="li">
      <button onClick={emojiClicked} className="buttonemoji" type="button">
        <img className="emojiImg" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
