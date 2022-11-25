import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import CommentItem from '../CommentItem'

// Write your code here

const initialNewUser = [
  {
    id: uuidv4(),
    userName: 'Ram',
    skil1: 'html',
    skil2: 'nodeJs',
    skil3: 'Bootstap',
  },
]

class Comments extends Component {
  state = {
    userList: initialNewUser,
    isCreatedTask: false,
    userName: '',
    skil1: '',
    skil2: '',
    skil3: '',
    isToggled: false,
  }

  onClickingCerateTask = () => {
    this.setState({isCreatedTask: true})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeSkill1 = event => {
    this.setState({skil1: event.target.value})
  }

  onChangeSkill2 = event => {
    this.setState({skil2: event.target.value})
  }

  onChangeSkill3 = event => {
    this.setState({skil3: event.target.value})
  }

  addUserDetails = event => {
    event.preventDefault()
    const {userList, userName, skil1, skil2, skil3} = this.state

    const newUser = {
      id: uuidv4(),
      userName,
      skil1,
      skil2,
      skil3,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      isCreatedTask: false,
    }))
  }

  onIsToggledBtn = () => {
    this.setState(prevState => ({isToggled: !prevState.isToggled}))
  }

  getFormDetails = () => (
    <form className="my-formDetails" onSubmit={this.addUserDetails}>
      <label htmlFor="userNmae">User Name</label>
      <input id="userNmae" type="text" onChange={this.onChangeUserName} />
      <br />
      <label htmlFor="Skil1">Skil1</label>
      <input id="Skil1" type="text" onChange={this.onChangeSkill1} />
      <br />
      <label htmlFor="Skil2">Skil2</label>
      <input id="Skil2" type="text" onChange={this.onChangeSkill2} />
      <br />
      <label htmlFor="Skil3">Skil3</label>
      <input id="Skil3" type="text" onChange={this.onChangeSkill3} />
      <br />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )

  render() {
    const {isCreatedTask, userList, isToggled} = this.state

    return (
      <div className="bgContainer">
        {isCreatedTask ? (
          this.getFormDetails()
        ) : (
          <div className="topCard">
            <h1 className="head">Todo List</h1>
            <button
              className="btn"
              type="button"
              onClick={this.onClickingCerateTask}
            >
              Create Task
            </button>
            <hr />

            <div className="bottomCard">
              <ul className="ulUserDetailsList">
                {userList.map(eachUser => (
                  <CommentItem
                    eachUser={eachUser}
                    key={eachUser}
                    onIsToggledBtn={this.onIsToggledBtn}
                    isToggled={isToggled}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Comments
