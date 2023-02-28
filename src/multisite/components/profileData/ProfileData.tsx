import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../../../entities/Redux';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import * as Styled from './ProfileData.styled';

type HeaderProps = {
  getStatusAutorization: (loginStatus: boolean) => void;
  loginstatusState: null | boolean;
};

const ProfileData: React.FC<HeaderProps> = ({ getStatusAutorization, loginstatusState }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!loginstatusState) {
      navigate('/');
    }
  }, []);

  const handlerClick = () => {
    localStorage.setItem('authorization', 'false');
    getStatusAutorization(false);
    navigate('/');
  };
  // console.log(localStorage.getItem('authorization'));
  return (
    <>
      <Avatar alt="User Avatar" sx={{ m: 3 }} />
      <Typography variant="h3" alignContent={'center'}>
        User
      </Typography>
      <Stack spacing={2}>
        <Styled.Item>Posts: 34</Styled.Item>
        <Styled.Item>Draft: 2</Styled.Item>
        <Styled.Item>Delete: 3</Styled.Item>
      </Stack>
      <Button variant="contained" size="small" onClick={() => handlerClick()}>
        Logeout
      </Button>
    </>
  );
};

const mapDispatch = (dispatch: ThunkDispatch<State, undefined, any>) => {
  return {
    getStatusAutorization: (status: boolean) => dispatch(newsActions.getStatusAutorization(status))
  };
};
const mapState = (state: State) => {
  return {
    loginstatusState: newsSelectors.statusAutorization(state)
  };
};

export default connect(mapState, mapDispatch)(ProfileData);
