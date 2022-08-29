import React from 'react';

import * as Styled from './styled';
import { useAppSelector } from '../../../../utils';

export const Profile = () => {
  const {
    app: { profile },
  } = useAppSelector();

  if (!profile) {
    return null;
  }

  return (
    <React.Fragment>
      <h1>Profile</h1>
      <Styled.Main>
        <Styled.Info>
          <Styled.Label>User name</Styled.Label>
          <Styled.Value>{profile.username}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Full name</Styled.Label>
          <Styled.Value>
            {profile.name.lastname} {profile.name.lastname}
          </Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Email</Styled.Label>
          <Styled.Value>{profile.email}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Phone number</Styled.Label>
          <Styled.Value>{profile.phone}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>City</Styled.Label>
          <Styled.Value>{profile.address.city}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Street</Styled.Label>
          <Styled.Value>{profile.address.street}</Styled.Value>
        </Styled.Info>
      </Styled.Main>
    </React.Fragment>
  );
};
