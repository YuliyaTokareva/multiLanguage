import * as React from 'react';
import { connect } from 'react-redux';
import type { NewsArticle } from '../../../entities/News';
import type { MapDispatchProps } from '../../../entities/Redux';
import * as newsActions from '../../news.actions';
import * as newsSelectors from '../../news.selectors';
import CardNews from '../cardNews/CardNews';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../../../entities/Redux';
import Spinner from '../spinner/Spinner';
import { combineGetUrl } from '../../dataGateway';
import { newsPerPage } from '../../../common/utils/newsData';
import * as Styled from './NewsBlock.styled';

type DataNewsProps = {
  getNewsList: (urlName: string) => void;
  newsList: NewsArticle[];
  isFetching: boolean;
  deletePost: (idPost: string) => void;
};

const NewsBlock: React.FC<DataNewsProps> = ({ getNewsList, newsList, isFetching, deletePost }) => {
  const [fetchStatus, setFetchStatus] = React.useState(isFetching);
  const [pagination, setPagination] = React.useState(0);
  React.useEffect(() => {
    setFetchStatus(isFetching);
  }, [isFetching]);

  React.useEffect(() => {
    getNewsList(combineGetUrl(pagination, newsPerPage));
  }, [pagination]);

  const handlerClickLoadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPagination(pagination + newsPerPage);
  };
  const handlerClickDelete = (idPost: string) => {
    deletePost(idPost);
  };

  return (
    <>
      <Styled.Title>News</Styled.Title>
      {!newsList ? (
        ''
      ) : (
        <CardNews
          handlerClick={handlerClickLoadMore}
          isFetching={isFetching}
          dataNews={newsList}
          onDelete={handlerClickDelete}
        />
      )}
      {!newsList || (newsList && isFetching) ? <Spinner /> : ''}
    </>
  );
};

const mapDispatch = (dispatch: ThunkDispatch<State, undefined, any>) => {
  return {
    getNewsList: (urlName: string) => dispatch(newsActions.getNewsList(urlName)),
    deletePost: (idPost: string) => dispatch(newsActions.deleteNewsPost(idPost))
  };
};
const mapState = (state: State) => {
  return {
    newsList: newsSelectors.newsListPagination(state),
    isFetching: newsSelectors.isFetchingSelector(state)
  };
};
export default connect(mapState, mapDispatch)(NewsBlock);
