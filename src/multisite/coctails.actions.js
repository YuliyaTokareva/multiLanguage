import { fetchCocktails } from './dataGateway';

export const COCTAILS_LIST_RECIEVED = 'COCTAILS_LIST_RECIEVED';

// export const showSpinner = () => ({
//   type: SHOW_SPINNER
// });
export const fetchCandidatesListRecieved = (coctailsList) => {
  const action = {
    type: COCTAILS_LIST_RECIEVED,
    payload: {
      coctailsList
    }
  };
  return action;
};
// export const fetchPosotionsListRecieved = (positionsList) => {
//   const action = {
//     type: POSITION_LIST_RECIEVED,
//     payload: {
//       positionsList
//     }
//   };
//   return action;
// };

export const getCoctailsList = () => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    // dispatch(showSpinner());
    fetchCocktails().then((coctailsList) => dispatch(fetchCandidatesListRecieved(coctailsList)));
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
