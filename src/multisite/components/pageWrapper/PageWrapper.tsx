import * as React from 'react';

import * as Styled from './PageWrapper.styled';

type DataNewsProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<DataNewsProps> = ({ children }) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default PageWrapper;
