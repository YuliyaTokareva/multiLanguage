import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { ThunkDispatch } from 'redux-thunk';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
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

  //localStorage.clear();
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
    // const formData = compliteFormData(dataForm, fileField);
    // postFofm(formData);
  };
  return (
    <Styled.Page>
      <Styled.FormBlock>
        <FormControl variant="standard">
          <InputLabel htmlFor="sstandard">Login</InputLabel>
          <Input
            id="standard"
            required={true}
            name="username"
            onChange={(event) => handleChange(event)}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            required={true}
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
          <Typography variant="body2" component="p">
            {loginError}
          </Typography>
        ) : (
          ''
        )}

        <Styled.ButtonBlock>
          <Styled.FormButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlerSubmit(e)}>
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
