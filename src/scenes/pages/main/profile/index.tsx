import React from 'react';

import * as Styled from './styled';
import { useAppSelector } from '../../../../utils';
import { PageTitle } from '../../../../components/pageTitle';

export const Profile = () => {
  const {
    app: { profile },
  } = useAppSelector();

  if (!profile) {
    return null;
  }

  return (
    <React.Fragment>
      <PageTitle title='Profile' />
      <Styled.Main>
        <Styled.Info>
          <Styled.Label>User name:</Styled.Label>
          <Styled.Value>{profile.username}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Full name:</Styled.Label>
          <Styled.Value>
            {profile.name.firstname} {profile.name.lastname}
          </Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Email:</Styled.Label>
          <Styled.Value>{profile.email}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Phone number:</Styled.Label>
          <Styled.Value>{profile.phone}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>City:</Styled.Label>
          <Styled.Value>{profile.address.city}</Styled.Value>
        </Styled.Info>
        <Styled.Info>
          <Styled.Label>Street:</Styled.Label>
          <Styled.Value>{profile.address.street}</Styled.Value>
        </Styled.Info>
      </Styled.Main>
    </React.Fragment>
  );
};
