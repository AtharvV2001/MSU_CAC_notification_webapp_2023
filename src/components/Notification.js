import React from "react";

const Notification = ({ userName, userImg, text, postImg }) => {
    return (
        <div className="tnotification1">
            <div className="user1">
                <div className="userprofile1">
                    <img src={userImg} alt="" width="55px" />
                </div>
                <div className="usertext">
                    <div className="username1">
                        <span>
                            <b>
                                {userName}
                            </b>
                        </span>
                        {" "}{text} 24h
                    </div>
                </div>
            </div>

            {postImg == false ? <div class="post1">
                <button class="fbtn">Follow</button>
            </div> : <div className="post1">
                <img src={postImg} alt="" width="55px" />
            </div>}

        </div>
    );
}

export default Notification;