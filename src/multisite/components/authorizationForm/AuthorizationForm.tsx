import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { ThunkDispatch } from 'redux-thunk';
import {
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  Input,
  InputAdornment
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material/';
import { State } from '../../../entities/Redux';
import * as Styled from './AuthorizationForm.styled';

type FormItems = {
  username: String;
  password: String;
};
const userLogin = {
  username: 'admin',
  password: '12345'
};

type HeaderProps = {
  getStatusAutorization: (loginStatus: boolean) => void;
};

const AuthorizationForm: React.FC<HeaderProps> = ({ getStatusAutorization }) => {
  const [dataForm, setDataForm] = React.useState<FormItems>({
    username: '',
    password: ''
  });
  let activeButton = Object.values(dataForm).some((x) => x.length === 0);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  let showingError = loginError.length !== 0;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  const handlerSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (dataForm.username === userLogin.username && dataForm.password === userLogin.password) {
      localStorage.setItem('authorization', 'true');
      getStatusAutorization(true);
      setDataForm({
        username: '',
        password: ''
      });

      navigate('/profile');
    }
    setLoginError('Username or password entered incorrectly.');
  };
  return (
    <Styled.Page>
      <Styled.FormBlock>
        <FormControl variant="standard">
          <InputLabel error={showingError} htmlFor="standard">
            Login
          </InputLabel>
          <Input
            error={showingError}
            id="standard"
            required={true}
            name="username"
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel error={showingError} htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            error={showingError}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ backgroundColor: 'transparent', color: 'rgba(0, 0, 0, 0.54)' }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        {loginError ? (
          <Typography color="text.error" variant="body2" component="p">
            {loginError}
          </Typography>
        ) : (
          ''
        )}

        <Styled.ButtonBlock>
          <Styled.FormButton
            disabled={activeButton}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlerSubmit(e)}>
            Login
          </Styled.FormButton>
        </Styled.ButtonBlock>
      </Styled.FormBlock>
    </Styled.Page>
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

export default connect(mapState, mapDispatch)(AuthorizationForm);
