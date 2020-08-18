//redux를 siteViewer에 주입
import { connect } from 'react-redux';
import SiteViewer from '../component/SiteViewer';

function mapReduxStateToReactProps(state) {
  return { siteList: state.siteList };
}

export default connect(mapReduxStateToReactProps, null)(SiteViewer);
