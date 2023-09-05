import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikingComment, onDeleteComment} = props
  const {id, name, comment, isLiked} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => {
    onLikingComment(id)
  }

  const onClickingDeleteButton = () => {
    onDeleteComment(id)
  }

  return (
    <>
      <li className="list-container">
        <div className="name-and-logo-container">
          <div className="logo">
            <p className="first-letter">{name[0]}</p>
          </div>
          <div>
            <h1 className="username">{name}</h1>
            <p className="comment-description">{comment}</p>
          </div>
        </div>
        <div className="like-del-btn">
          <div className="like-btn">
            <button type="button" className="btn">
              <img src={likeImgUrl} alt="like" className="like-img" />
            </button>
            <button
              className="like-text-btn"
              type="button"
              onClick={onClickLikeBtn}
            >
              Like
            </button>
          </div>
          <button
            data-testid="delete"
            type="button"
            className="btn"
            onClick={onClickingDeleteButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
