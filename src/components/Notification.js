import React, { useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const Notification = ({
  userName,
  userImg,
  text,
  postImg,
  id,
  date,
  isRead,
  type,
  handleClick,
  isFollowing
}) => {
  const [isFollow, setIsFollow] = useState(isFollowing);
  const timeAgo = new TimeAgo("en-US");
  const toggleFollow = () => {
    setIsFollow(!isFollow)
  }
  return (
    <div className="tnotification1" onClick={() => handleClick(id, isRead)}>
      {!isRead && <div className="unread" />}
      <div className="user1">
        <div className="userprofile1">
          <img src={userImg} alt="UserImage" className="userImg" />
        </div>
        <div className="usertext">
          <div className="username1">
            <span>
              <b>{userName}</b>
            </span>{" "}
            {text}{" "}
            <span className="timeAgo"> {timeAgo.format(date, "mini")} </span>
          </div>
        </div>
      </div>

      {type === "follow" ? (
        <div className="post1">
          <button
            className={isFollow ? "fgbtn" : "fbtn"}
            onClick={toggleFollow}
          >{isFollow ? "Following" : "Follow"}</button>
        </div>
      ) : (
        <div className="post1">
          <img src={postImg} alt="PostImage" className="postImg" />
        </div>
      )}
    </div>
  );
};

export default Notification;
