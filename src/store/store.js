import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const enhancedReducer = persistReducer(persistConfig, reducer);

export default createStore(
  enhancedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export default createStore((state, action) => {
//   if (state === undefined) {
//     return {
//       siteList: {
//         result: [
//           {
//             siteid: null,
//             sitename: null,
//             link: null,
//             description: null,
//             imagelink: null,
//           },
//         ],
//       },
//     };
//   }

//   if (action.type === 'SITELIST') {
//     return { ...state, siteList: action.siteList };
//   }
//   return state;
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
