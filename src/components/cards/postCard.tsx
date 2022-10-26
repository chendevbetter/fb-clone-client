import avatarIcon from "../../static/images/avatar-icon.png";
import React from "react";
import messangerIcon from "../../static/images/messenger-icon.png";

const PostCard = () => {
  return (
    <div className="card1">
      <div className="post-card__header">
        <img src={avatarIcon} className="top-bar__profile-pic" />
        <div>
          <h2>Group name</h2>
          <div className="post-card__user-details">
            <p>User name</p>
            <p>10h</p>
          </div>
        </div>
      </div>
      <div className="post-card__post">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus,
        adipisci autem dicta dignissimos dolorum eius enim eos et fuga illum
        laborum, molestias quidem soluta tempora tenetur unde vitae? Dolores.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate
        eveniet fugiat illo ipsum odio officia ratione sapiente sequi sit,
        soluta, ullam ut voluptate. A cum deserunt itaque libero rem.
      </div>
      <div className="post-card__metadata">
        <div className="post-card__metadata--likes">
          <img src={messangerIcon} className="gray-circle__img" />
          <p>4</p>
        </div>
        <div>7 Comments</div>
      </div>
    </div>
  );
};

export default PostCard;
