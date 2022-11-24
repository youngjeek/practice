/* eslint-disable jsx-a11y/alt-text */
import Button from 'components/Button';
import React, { useState } from 'react';
import { ref, uploadString } from '@firebase/storage';
import { storageService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';
const EditProfile = ({ userObj }) => {
  console.log(userObj);
  const [attachment, setAttachment] = useState('');
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const pickFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(pickFile);
  };
  const attachmentUpload = async (event) => {
    const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
    const response = await uploadString(fileRef, attachment, 'data_url');
    console.log(response);
  };
  //미리보기 취소
  const onClearAttachmentClick = () => setAttachment(null);
  return (
    <div>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <Button onClickEvent={attachmentUpload} btnName="Upload" />
      {attachment && (
        <div>
          <img src={attachment} width="100px" height="100px" />
          <Button onClickEvent={onClearAttachmentClick} btnName="Discard" />
        </div>
      )}
    </div>
  );
};
export default EditProfile;
