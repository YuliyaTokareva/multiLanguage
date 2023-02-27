import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import * as Styled from './ProfileData.styled';

const ProfileData = () => {
  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem('authorization', 'false');
  };
  console.log(localStorage.getItem('authorization'));
  return (
    <>
      <Styled.UserAvatar alt="User Avatar" src="/broken-image.jpg" />
      <Styled.Name>User</Styled.Name>
      <Stack spacing={2}>
        <Styled.Item>Posts: 34</Styled.Item>
        <Styled.Item>Draft: 2</Styled.Item>
        <Styled.Item>Delete: 3</Styled.Item>
      </Stack>
      <Button variant="contained" size="small" onClick={(e) => handlerClick(e)}>
        Logeout
      </Button>
    </>
  );
};

export default ProfileData;
