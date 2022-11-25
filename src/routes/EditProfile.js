/* eslint-disable jsx-a11y/alt-text */
import Button from 'components/Button';
import React, { useState } from 'react';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';
import { storageService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';
const EditProfile = ({ userObj }) => {
  const [attachment, setAttachment] = useState('');
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const pickFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(pickFile);
  };
  const attachmentUpload = async (event) => {
    let attachmentUrl = '';
    if (attachment !== '') {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      //storage에 해당경로 파일 업로드
      const profileFile = await uploadString(fileRef, attachment, 'data_url');
      console.log(profileFile);
      //storage에 있는 파일 URL로 다운로드 받기
      attachmentUrl = await getDownloadURL(profileFile.ref);
      userObj.photoURL = attachmentUrl;
      console.log(userObj.photoURL);
    }
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
