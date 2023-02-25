import * as React from 'react';
import { connect } from 'react-redux';
import type { NewsArticle } from '../../../entities/News';
import Button from '@mui/material/Button';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { arrayNewsPerPage } from '../../../common/utils/newsData';
import CardNews from '../cardNews/CardNews';

import * as Styled from './News.styled';

type DataNewsProps = {
  getNewsList: any;
  newsList: NewsArticle[];
  isFetching: boolean;
};

const News: React.FC<DataNewsProps> = ({ getNewsList, newsList, isFetching }) => {
  const baseUrl = 'https://mockend.com/YuliyaTokareva/multiLanguage/posts?offset=0&&limit=6';
  const baseUrl2 = 'https://mockend.com/YuliyaTokareva/multiLanguage/posts?offset=6&&limit=6';
  const [fetchUrl, setFetchUrl] = React.useState(baseUrl);
  const [fetchStatus, setFetchStatus] = React.useState(isFetching);
  React.useEffect(() => {
    setFetchStatus(isFetching);
  }, [isFetching]);

  React.useEffect(() => {
    getNewsList(baseUrl);
  }, [fetchUrl]);

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getNewsList(baseUrl2);
  };

  return (
    <Styled.Layout>
      <Styled.Title>News</Styled.Title>

      {fetchStatus ? (
        arrayNewsPerPage.map((el, index) => <CardNews key={index} isFetching={fetchStatus} />)
      ) : (
        <>
          {newsList.map((el) => (
            <CardNews key={el.id} isFetching={fetchStatus} dataNews={el} />
          ))}
        </>
      )}
      {fetchStatus ? (
        arrayNewsPerPage.map((el, index) => <CardNews key={index} isFetching={fetchStatus} />)
      ) : (
        <Button variant="contained" onClick={(e) => handlerClick(e)}>
          Show More
        </Button>
      )}
    </Styled.Layout>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getNewsList: (urlName) => dispatch(newsActions.getNewsList(urlName))
  };
};
const mapState = (state) => {
  return {
    newsList: newsSelectors.newsListPagination(state),
    isFetching: newsSelectors.isFetchingSelector(state)
  };
};
export default connect(mapState, mapDispatch)(News);
