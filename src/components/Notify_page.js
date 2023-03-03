import React, { useState } from "react";
import Notification from "./Notification";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect } from "react";
import { firebaseDB } from "../firebase/firebase";

const Notify_page = () => {
  const [notifyList, setNotifyList] = useState([]);
  const [readlist, setReadlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const setRead = (id, isRead) => {
    if (isRead) return;
    const list = notifyList
      .filter((notify) => id === notify.id)
      .map((notify) => ({ ...notify, readFlag: !notify.readFlag }));
    const unReadList = notifyList.filter((notify) => id !== notify.id);
    setNotifyList(unReadList);
    setReadlist([...readlist, ...list]);
  };

  const setReadAll = () => {
    const list = notifyList.map((notify) => ({
      ...notify,
      readFlag: !notify.readFlag,
    }));
    setNotifyList([]);
    setReadlist([...readlist, ...list]);
  };

  const getData = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(firebaseDB, "notification"));
    const list = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotifyList(list);
    setIsLoading(false);
  };

  return (
    <main>
      <div className="title">
        <h2>Notification</h2>
      </div>
      {isLoading ? (
        <div className="loader">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          {notifyList.length > 0 && (
            <>
              <div className="new">
                <h3>New</h3>
                <button className="fgbtn readallbtn" onClick={setReadAll}>
                  Read All
                </button>
              </div>
              {notifyList.map((notify) => (
                <Notification
                  key={notify.id}
                  id={notify.id}
                  userName={notify.notifyFrom}
                  date={notify.notifyDateTime.toDate()}
                  userImg={notify.notifyUserImage}
                  postImg={notify.notifyPostImage}
                  text={notify.notifyText}
                  isRead={notify.readFlag}
                  type={notify.notifyType}
                  handleClick={setRead}
                />
              ))}
            </>
          )}
          {readlist.length > 0 && (
            <>
              <div className="new">
                <h3>Read</h3>
              </div>
              {readlist.map((notify) => (
                <Notification
                  key={notify.id}
                  id={notify.id}
                  userName={notify.notifyFrom}
                  date={notify.notifyDateTime.toDate()}
                  userImg={notify.notifyUserImage}
                  postImg={notify.notifyPostImage}
                  text={notify.notifyText}
                  isRead={notify.readFlag}
                  type={notify.notifyType}
                  handleClick={setRead}
                />
              ))}
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default Notify_page;
