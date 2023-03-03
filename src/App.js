import logo from './logo.svg';
import './App.css';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from 'react';
import { firebaseDB } from './firebase/firebase';
import { Timestamp } from 'firebase/firestore';

function App() {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(firebaseDB, "notification"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log('aaa');
      console.log(`${doc.id} => `,doc.data().notifyDateTime.toDate());
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={add}>
          Add User
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
