import React, { useState } from 'react';
import Button from './Button';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { dbService } from 'fbase';

const Tally = ({ tallyObj, isOwner }) => {
  const tallyRef = doc(dbService, 'tallies', `${tallyObj.id}`);
  const [editing, setEditing] = useState(false);
  const [newTally, setNewTally] = useState(tallyObj.tally);
  const toggleEditing = (e) => {
    setEditing((prev) => !prev);
  };
  //update tally
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(tallyRef, {
      tally: newTally,
    });
    toggleEditing();
  };
  //delete tally
  const onDeleteClick = async (e) => {
    const check = window.confirm('Are you sure want to delete this?');
    if (check) {
      await deleteDoc(tallyRef);
    }
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTally(value);
  };
  return (
    <div key={tallyObj.id}>
      {editing ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="tallyObj.tally"
            value={newTally}
            required
            onChange={onChange}
          ></input>
          <Button onClickEvent="onSubmit" btnName="Save" />
          <Button onClickEvent={toggleEditing} btnName={'Discard'} />
        </form>
      ) : (
        <>
          <h4>
            <img src={tallyObj.profileImg} width="30px" height="30px" />
            {tallyObj.tally} ...
            <span>{new Date(tallyObj.createDate).toLocaleString()}</span>
            {isOwner && (
              <>
                <Button onClickEvent={onDeleteClick} btnName={'X'} />
                <Button onClickEvent={toggleEditing} btnName={'Edit'} />
              </>
            )}
          </h4>
        </>
      )}
    </div>
  );
};

export default Tally;
