import { getTopTracks, getTrack } from '../../agent/agent';
import * as actions from './tracksActions';

export const fetchTopTracks = () => async dispatch => {
  dispatch(actions.getCollectionStart());

  try {
    dispatch(actions.setIsLoading(true));

    const request = await getTopTracks();
    const { track } = request.data.tracks;
    dispatch(actions.getCollectionSuccess(track));
  } catch (err) {
    dispatch(actions.getCollectionFail(err));
  } finally {
    dispatch(actions.setIsLoading(false));
  }
};
export const fetchSearchedTracks = input => async dispatch => {
  dispatch(actions.getSearchedTracksStart());

  try {
    dispatch(actions.setIsLoading(true));

    const req = await getTrack(input);
    const matchedTracks = req.data.results.trackmatches.track;
    dispatch(actions.getSearchedTracksSuccess(matchedTracks));
  } catch (err) {
    dispatch(actions.getSearchedTracksFail(err));
  } finally {
    dispatch(actions.setIsLoading(false));
  }
};
