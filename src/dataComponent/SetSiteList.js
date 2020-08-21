//siteList 가져와서  redux에 주입
import { connect } from 'react-redux';
import SideBar from '../component/SideBar';
import types from '../types';

function mapDispatchToProps(dispatch) {
  return {
    onClick: (suchText) => {
      dispatch({ type: types.suchSite, suchText });
    },
    putSiteList: (siteList) => {
      dispatch({ type: types.siteListType, siteList });
    },
    onClickDelete: (siteList) => {
      dispatch({ type: types.delete, siteList });
    },
  };
}

export default connect(null, mapDispatchToProps)(SideBar);
