import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from 'react';
import { firebaseDB } from './firebase/firebase';
import { Timestamp } from 'firebase/firestore';
import Notify_page from './components/Notify_page';

function App() {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(firebaseDB, "notification"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log('aaa');
      console.log(`${doc.id} => `, doc.data().notifyDateTime.toDate());
    });
  }

  const add = async () => {
    try {
      const docRef = await addDoc(collection(firebaseDB, "notification"), {
        notifyDateTime: Timestamp.fromDate(new Date('20-feb-2023')),
        notifyFrom: "Mathison",
        notifyPostImage: "Turing",
        notifyText: '1912',
        notifyType: "like",
        notifyUserImage: "",
        readFlag: false
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }




  return (
    <div className="main_page">
      <Notify_page />
    </div>
  );
}

export default App;
