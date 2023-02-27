import * as React from 'react';
import PageWrapper from '../multisite/components/pageWrapper/PageWrapper';
import NewsBlock from '../multisite/components/newsBlock/NewsBlock';

const News: React.FC = () => {
  return (
    <PageWrapper>
      <NewsBlock />
    </PageWrapper>
  );
};

export default News;
