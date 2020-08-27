import types from '../types';

const initialState = {
  show: [
    {
      tags: [],
      siteid: null,
      sitename: null,
      link: null,
      description: null,
      imagelink: null,
    },
  ],
  result: [
    {
      tags: [],
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
      var visited = [];
      visited.length = state.result.length;
      if (action.such.checked) {
        for (var t = 0; t < action.such.checked.length; t++) {
          for (var y = 0; y < state.result.length; y++) {
            for (var x = 0; x < state.result[y].tags.length; x++) {
              if (
                state.result[y].tags[x] === action.such.checked[t] &&
                visited[y] !== 1
              ) {
                showList.push(state.result[y]);
                visited[y] = 1;
                break;
              }
            }
          }
        }
      }

      if (action.such.text === '' && action.such.checked.length === 0) {
        showList = state.result;
      } else if (action.such.text !== '') {
        for (var i = 0; i < state.result.length; i++) {
          if (
            state.result[i].sitename.indexOf(action.such.text) !== -1 &&
            visited[i] !== 1
          ) {
            showList.push(state.result[i]);
            break;
          }
          for (var j = 0; j < state.result[i].tags.length; j++) {
            if (
              state.result[i].tags[j].indexOf(action.such.text) !== -1 &&
              visited[i] !== 1
            ) {
              showList.push(state.result[i]);
              break;
            }
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
