import * as React from 'react';

import * as Styled from './HomeBanner.styled';

const HomeBanner: React.FC = () => {
  return (
    <Styled.Page>
      <Styled.Headline>
        <Styled.Description>
          <Styled.Maintext>Soft Site</Styled.Maintext>
        </Styled.Description>
      </Styled.Headline>
    </Styled.Page>
  );
};
export default HomeBanner;
