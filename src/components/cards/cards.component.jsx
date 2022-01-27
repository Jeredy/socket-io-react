import React from "react";

import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

import "./cards.styles.css";

const Cards = ({ post }) => {
  const [liked, setLiked] = React.useState(false);

    const handleNotification = () => {
        setLiked(true)
    }

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        <img
          src={!liked ? Heart : HeartFilled}
          alt=""
          className="cardIcon"
          onClick={() => (!liked ? handleNotification() : {})}
        />
        <img src={Comment} alt="" className="cardIcon" />
        <img src={Share} alt="" className="cardIcon" />
        <img src={Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Cards;
