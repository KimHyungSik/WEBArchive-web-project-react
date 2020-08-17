const initialState = {
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

const siteList = (state = initialState, action) => {
  switch (action.type) {
    case 'SITELIST':
      return {
        ...state,
        siteList: action.siteList,
      };
    default:
      return state;
  }
};

export default siteList;
