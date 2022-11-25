// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachUser, isToggled, onIsToggledBtn} = props

  const {userName, skil1, skil2, skil3} = eachUser

  const onClickCheckBox = () => {
    onIsToggledBtn()
  }
  const cls = isToggled ? 'isToggledCls' : ''

  return (
    <li className="listComment">
      <div className="boxCard">
        <p className="para">{userName}</p>
        <div className="skilCard">
          <input type="checkbox" onClick={onClickCheckBox} />
          <p className={cls}>{skil1}</p>
          <button className="button" type="button">
            Delete
          </button>
        </div>
        <div className="skilCard">
          <input type="checkbox" onClick={onClickCheckBox} />
          <p className={cls}>{skil2}</p>
          <button className="button" type="button">
            Delete
          </button>
        </div>
        <div className="skilCard">
          <input type="checkbox" />
          <p>{skil3}</p>
          <button className="button" type="button">
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
