import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ILoginBody } from '../../../../api';
import { loginThunk, TAppDispatch, TRootState } from '../../../../stores';

import * as Styled from './styled';

export const Login = () => {
  const auth = useSelector((state: TRootState) => state.auth);
  const dispatch = useDispatch<TAppDispatch>();
  const [loginBody, setLoginBody] = useState<ILoginBody>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginBody({
      ...loginBody,
      [event.target.name]: event.target.value,
    });
  };

  const login = () => {
    dispatch(loginThunk(loginBody));
  };

  return (
    <Styled.Root>
      <Styled.Input
        fullWidth
        id='username'
        name='username'
        label='User name'
        value={loginBody.username}
        onChange={handleChange}
        variant='standard'
      />
      <Styled.Input
        fullWidth
        id='password'
        name='password'
        label='Password'
        type='password'
        value={loginBody.password}
        onChange={handleChange}
        variant='standard'
      />
      <Styled.Login
        disabled={auth.isLoading}
        onClick={login}
        variant='contained'
        fullWidth
      >
        Login
      </Styled.Login>
    </Styled.Root>
  );
};
