//eslint-disable-next-line
import type { State } from './../entities/Redux';
export const newsListSelector = (state: State) => state.newsData.newsList;
export const isFetchingSelector = (state: State) => state.newsData.isFetching;
export const newsListPagination = (state: State) => state.newsData.newsListPagination;
// // eslint-disable-next-line
// eslint-disable-next-line
// export const newsListSelector = (state) => state.newsData.newsList;
// export const isFetchingSelector = (state) => state.newsData.isFetching;
// export const newsListPagination = (state) => state.newsData.newsListPagination;
