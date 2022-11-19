import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';

const Home = ({ userObj }) => {
  const [tally, setTally] = useState('');
  const [tallies, setTallies] = useState([]);
  // const getTallies = async () => {
  //   const q = query(collection(dbService, 'tallies'));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((text) => {
  //     const tallyObj = {
  //       ...text.data(),
  //       id: text.id,
  //     };
  //     setTallies((prev) => [tallyObj, ...prev]);
  //   });
  // };
  useEffect(() => {
    // getTallies();
    const q = query(
      collection(dbService, 'tallies'),
      orderBy('createDate', 'desc')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTallies(newArray);
      console.log('Current Tally in CA: ', newArray);
      return () => unsubscribe();
    });
  }, []);
  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setTally(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    //https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0#web-version-9_2
    try {
      const docRef = await addDoc(collection(dbService, 'tallies'), {
        tally,
        createdDate: serverTimestamp(),
        createDate: Date.now(),
        createId: userObj.uid,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setTally('');
  };

  return (
    <div>
      <span>Home</span>;
      <form onSubmit={onSubmit}>
        <input
          value={tally}
          onChange={onChange}
          type="text"
          placeholder="Tally of Today I learn"
          maxLength={120}
        />
        <input type="submit" value="전송" />
      </form>
      <div>
        {tallies.map((item) => (
          <div key={item.id}>
            <h4>
              {item.tally} ...
              <span>{new Date(item.createDate).toLocaleString()}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
