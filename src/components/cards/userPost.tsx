import React from "react";
import messangerIcon from "../../static/images/messenger-icon.png";
import likeBtn from "../../static/images/like-btn.png";
import commentIcon from "../../static/images/comment-icon.png";
import messageIcon from "../../static/images/message-icon.png";
import {returnServerHttpClient} from "../../utils/async-operations";

interface IUserPost {
  txt: string;
  name: string;
  timeSincePostPublished: string;
  img: string;
  postId: number;
  num_likes: number;
}

const UserPost = ({ txt, name, timeSincePostPublished, img, postId, num_likes }: IUserPost) => {

  const handleLikePost = async () => {
    const serverHttpClient = returnServerHttpClient()
    await serverHttpClient.post('/posts/like', {postId})
  }

  console.log(123, num_likes)


  return (
    <div className="card1">
      <div className="post-card__header">
        <img src={img} className="post-card__img" alt='post-img'/>
        <div>
          <div className="post-card__user-details">
            <p className="post-card__name">{name}</p>
            <p className="post-card__time-since-publish">
              {timeSincePostPublished}
            </p>
          </div>
        </div>
      </div>
      <div className="post-card__post">{txt}</div>
      <div className="post-card__metadata">
        <div className="post-card__metadata--likes">
          <img  src={likeBtn} className="gray-circle__img" alt='messanger'/>
          <p>{num_likes}</p>
        </div>
        <div>0</div>
      </div>
      <section className="post-card__action">
        <div onClick={handleLikePost} className="post-card__action--like-container">
          <img className="post-card__like--icon" src={likeBtn} alt='like'/>
          <p className="post-card__action--txt">Like</p>
        </div>
        <div className="post-card__action--comment-container">
          <img className="post-card__like--icon" src={commentIcon} alt='comment'/>
          <p className="post-card__action--txt">Comment</p>
        </div>
        <div className="post-card__action--message-container">
          <img className="post-card__like--icon" src={messageIcon} alt='message'/>
          <p className="post-card__action--txt">Message</p>
        </div>
      </section>
    </div>
  );
};

export default UserPost;
