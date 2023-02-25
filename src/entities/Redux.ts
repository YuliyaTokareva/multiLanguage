import type { NewsArticle } from './News';

export const ActionTypes = {
  SHOW_SPINNER: 'SHOW_SPINNER',
  NEWS_LIST_RECIEVED: 'NEWS_LIST_RECIEVED'
};

export interface State {
  newsData: {
    newsList: NewsArticle[];
    newsListPagination: NewsArticle[];
    isFetching: boolean;
  };
}
export interface InitialState {
  newsList: NewsArticle[];
  newsListPagination: NewsArticle[];
  isFetching: boolean;
}
interface Action<T extends string, P> {
  type: T;
  payload: P;
}
export interface FetchSpinnerAction extends Action<'SHOW_SPINNER', undefined> {}

export interface FetchNewsListAction
  extends Action<'NEWS_LIST_RECIEVED', { newsList: NewsArticle[] }> {}

// interface FetchSpinnerAction {
//   type: typeof ActionTypes.SHOW_SPINNER;
// }
// interface FetchNewsListAction {
//   type: typeof ActionTypes.NEWS_LIST_RECIEVED;
//   payload: NewsArticle[];
// }

export type Actions = FetchSpinnerAction | FetchNewsListAction;

export type MapDispatchProps = {
  getNewsList: (urlName: string) => void;
};
