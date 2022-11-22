import React from 'react';

const EditProfile = () => {
  const onFileChange = (e) => {};
  return (
    <div>
      <input type="file" accept="image/*" onChange={onFileChange} />
    </div>
  );
};
export default EditProfile;
