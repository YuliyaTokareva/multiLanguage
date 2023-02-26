import * as React from 'react';
import { connect } from 'react-redux';
import type { NewsArticle } from '../../../entities/News';
import type { MapDispatchProps } from '../../../entities/Redux';
import Button from '@mui/material/Button';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import { arrayNewsPerPage } from '../../../common/utils/newsData';
import CardNews from '../cardNews/CardNews';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../../../entities/Redux';
import Spinner from '../spinner/Spinner';
import * as Styled from './News.styled';

type DataNewsProps = {
  getNewsList: (urlName: string) => void;
  newsList: NewsArticle[];
  isFetching: boolean;
};

const News: React.FC<DataNewsProps> = ({ getNewsList, newsList, isFetching }) => {
  const [fetchStatus, setFetchStatus] = React.useState(isFetching);
  const [pagination, setPagination] = React.useState(0);
  React.useEffect(() => {
    setFetchStatus(isFetching);
  }, [isFetching]);

  React.useEffect(() => {
    getNewsList(
      `https://mockend.com/YuliyaTokareva/multiLanguage/posts?offset=${pagination}&&limit=6`
    );
  }, [pagination]);

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPagination(pagination + 6);
  };

  return (
    <Styled.Layout>
      <Styled.Title>News</Styled.Title>
      {!newsList ? (
        ''
      ) : (
        <CardNews handlerClick={handlerClick} isFetching={isFetching} dataNews={newsList} />
      )}
      {!newsList || (newsList && isFetching) ? <Spinner /> : ''}
    </Styled.Layout>
  );
};

const mapDispatch = (dispatch: ThunkDispatch<State, undefined, any>): MapDispatchProps => {
  return {
    getNewsList: (urlName: string) => dispatch(newsActions.getNewsList(urlName))
  };
};
const mapState = (state: State) => {
  return {
    newsList: newsSelectors.newsListPagination(state),
    isFetching: newsSelectors.isFetchingSelector(state)
  };
};
export default connect(mapState, mapDispatch)(News);
