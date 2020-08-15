import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return {
      siteList: {
        result: [
          {
            siteid: null,
            sitename: null,
            link: null,
            description: null,
            imagelink: null,
          },
        ],
      },
    };
  }

  if (action.type === 'SITELIST') {
    return { ...state, siteList: action.siteList };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
