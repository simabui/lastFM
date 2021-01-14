export const TYPE = {
  getStart: 'tracks/TOPTRACKS_GET_START',
  getSuccess: 'tracks/TOPTRACKS_GET_SUCCESS',
  getFail: 'tracks/TOPTRACKS_GET_FAIL',
  getSearchedTracksStart: 'tracks/SEARCHED_TRACKS_GET_START',
  getSearchedTracksSuccess: 'tracks/SEARCHED_TRACKS_GET_SUCCESS',
  getSearchedTracksFail: 'tracks/SEARCHED_TRACKS_GET_FAIL',
  search: 'tracks/SEARCH_INPUT',
  isLoading: 'tracks/IS_LOADING',
};

// TOPTRACKS
export function getCollectionStart() {
  return {
    type: TYPE.getStart,
  };
}
export function getCollectionSuccess(tracks) {
  return {
    type: TYPE.getSuccess,
    payload: { tracks },
  };
}
export function getCollectionFail(error) {
  return {
    type: TYPE.getFail,
    payload: { error },
  };
}
// SEARCHEDTRACKS
export function getSearchedTracksStart() {
  return {
    type: TYPE.getSearchedTracksStart,
  };
}
export function getSearchedTracksSuccess(tracks) {
  return {
    type: TYPE.getSearchedTracksSuccess,
    payload: { tracks },
  };
}
export function getSearchedTracksFail(error) {
  return {
    type: TYPE.getSearchedTracksFail,
    payload: { error },
  };
}

// INPUT
export function searchInput(str) {
  return {
    type: TYPE.search,
    payload: { str },
  };
}
// LOADER
export function setIsLoading(bool) {
  return {
    type: TYPE.isLoading,
    payload: { bool },
  };
}
