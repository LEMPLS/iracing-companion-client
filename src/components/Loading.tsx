import React, { FC } from 'react';
import styled from '@emotion/styled';
import Emoji from 'a11y-react-emoji';

const Wrapper = styled.span({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '100px',
  height: '100%',
});

export const Loading: FC = () => (
  <Wrapper><Emoji symbol="⏳" label="Loading"/></Wrapper>
);
