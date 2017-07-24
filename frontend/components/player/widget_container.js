import { connect } from 'react-redux';

import Widget from './widget';
import { logout } from '../../actions/session_actions';
import { pausePlayback, play } from '../../actions/playback_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  playback: state.playback,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  pausePlayback: () => dispatch(pausePlayback()),
  play: () => dispatch(play()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);