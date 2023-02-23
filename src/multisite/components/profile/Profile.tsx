import React from 'react';
import Button from '@mui/material/Button';
const Profile = () => {
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem('authorization', 'false');
  };
  console.log(localStorage.getItem('authorization'));
  return (
    <Button variant="contained" onClick={(e) => handlerClick(e)}>
      Logeout
    </Button>
  );
};

export default Profile;
