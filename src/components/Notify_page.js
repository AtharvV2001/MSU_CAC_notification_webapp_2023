import React, { useState } from "react";
import Notification from "./Notification";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect } from 'react';
import { firebaseDB } from "../firebase/firebase";

const Notify_page = () => {
    const [notifyList, setNotifyList] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(firebaseDB, "notification"));
        const list = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setNotifyList(list);
    }

    return (
        <main>
            <div className="title">
                <h2>Notification</h2>
            </div>
            <div className="new">
                <h3>New</h3>
            </div>
            {notifyList.map(notify => (
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
                />
            ))}
        </main>
    )
}

export default Notify_page;