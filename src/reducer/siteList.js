import types from '../types';

const initialState = {
  show: [
    {
      tagname: null,
      siteid: null,
      sitename: null,
      link: null,
      description: null,
      imagelink: null,
    },
  ],
  result: [
    {
      tagname: null,
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
      return {
        ...state,
        result: action.siteList.result,
        show: action.siteList.result,
      };
    case types.suchSite:
      var showList = [];
      if (action.suchText === '') {
        showList = state.result;
      } else {
        for (var i = 0; i < state.result.length; i++) {
          if (
            state.result[i].tagname.indexOf(action.suchText) !== -1 ||
            state.result[i].sitename.indexOf(action.suchText) !== -1
          ) {
            showList.push(state.result[i]);
          }
        }
      }
      return {
        ...state,
        show: showList,
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
