import types from '../types';

const initialState = {
  result: [
    {
      siteid: null,
      sitename: null,
      link: null,
      description: null,
      imagelink: null,
    },
  ],
};

//stieList 저장하는 reducer
const siteList = (state = initialState, action) => {
  switch (action.type) {
    case types.siteListType:
      console.log('redux', action.siteList);
      return {
        ...state,
        result: action.siteList.result,
      };
    case types.delete:
      console.log(state);
      return {
        ...state,
        result: state.result.filter(
          () => state.result.sitename !== action.siteList.result.sitename
        ),
      };
    default:
      return state;
  }
};

export default siteList;
