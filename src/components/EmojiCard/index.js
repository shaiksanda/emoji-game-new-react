// Write your code here.
// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiData, onClickImage} = props
  const {emojiName, emojiUrl, id} = emojiData

  const handleClick = () => {
    onClickImage(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" onClick={handleClick} className="image-button">
        {' '}
        <img alt={emojiName} src={emojiUrl} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
