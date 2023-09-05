import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeNameElement = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeCommentItem = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onLikingComment = uniqueId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === uniqueId) {
          return {...eachComment, isLiked: !prevState.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = uniqueNo => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== uniqueNo,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="app-container">
        <h1 className="title">Comments</h1>
        <div className="content-container">
          <div className="username-and-comment-text">
            <p className="description">Say something about 4.0 Technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeNameElement}
              />
              <textarea
                value={comment}
                type="textarea"
                rows="8"
                cols="50"
                className="comment-texarea"
                placeholder="Your Comment"
                onChange={this.onChangeCommentItem}
              />
              <button type="submit" className="add-comments-button">
                Add Comments
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="comment-section">
          <div className="comment-count">
            <p className="nums">{commentsList.length}</p>
          </div>
          <h1 className="comments">Comments</h1>
        </div>

        <ul className="comments-items">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              onLikingComment={this.onLikingComment}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
