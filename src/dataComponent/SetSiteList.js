import { connect } from 'react-redux';
import SideBar from '../component/SideBar';

function mapDispatchToProps(dispatch) {
  return {
    onClick: (siteList) => {
      dispatch({ type: 'SITELIST', siteList });
    },
  };
}

export default connect(null, mapDispatchToProps)(SideBar);
