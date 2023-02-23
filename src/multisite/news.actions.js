import { fetchNews } from './dataGateway';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const NEWS_LIST_RECIEVED = 'NEWS_LIST_RECIEVED';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const fetchCandidatesListRecieved = (newsList) => {
  const action = {
    type: NEWS_LIST_RECIEVED,
    payload: {
      newsList
    }
  };
  return action;
};

export const getNewsList = (urlName) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    fetchNews(urlName).then((newsList) => dispatch(fetchCandidatesListRecieved(newsList)));
  };
  return thunkAction;
};
// export const getPositionsList = (urlName) => {
//   // eslint-disable-next-line
//   const thunkAction = function (dispatch) {
//     fetchCandidatesList(urlName).then((positionsList) =>
//       dispatch(fetchPosotionsListRecieved(positionsList))
//     );
//   };
//   return thunkAction;
// };

// export const getPostFofm = (data) => {
//   // eslint-disable-next-line
//   const thunkAction = function (dispatch) {
//     fetchPostFofm(data).then((isSendForm) => dispatch(postFofm(isSendForm)));
//   };
//   return thunkAction;
// };

// export const getNewCandidatesList = (urlName) => {
//   // eslint-disable-next-line

//   const thunkAction = function (dispatch) {
//     dispatch(showSpinner());
//     fetchCandidatesList(urlName).then((candidatesList) =>
//       dispatch(fetchCandidatesListRecieved(candidatesList))
//     );
//     dispatch(fetchNewCandidatesList());
//     setTimeout(() => {
//       dispatch(refreshForm());
//     }, 3000);
//   };
//   return thunkAction;
// };
