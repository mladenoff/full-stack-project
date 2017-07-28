import { connect } from 'react-redux';

import Search from './search';
import { requestSearchResults, clearSearch } from '../../../../actions/search_actions';
import { enqueuePlayback } from '../../../../actions/playback_actions';
import { selectAllTracks } from '../../../../reducers/selectors';

const mapStateToProps = (state) => ({
  tracks: selectAllTracks(state),
  fetching: state.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  requestSearchResults: (search) => dispatch(requestSearchResults(search)),
  enqueuePlayback: (tracks, currentTrack) => dispatch(enqueuePlayback(tracks, currentTrack)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);