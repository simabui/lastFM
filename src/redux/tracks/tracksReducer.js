import { combineReducers } from 'redux';
import { TYPE } from './tracksActions';

// TOPTRACKS
function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.getSuccess: {
      return [...action.payload.tracks];
    }

    default:
      return state;
  }
}
// SEARCHEDTRACKS
function searchedTracksReducer(state = null, action) {
  switch (action.type) {
    case TYPE.getSearchedTracksSuccess: {
      return [...action.payload.tracks];
    }

    default:
      return state;
  }
}

function searchInputReducer(state = '', action) {
  switch (action.type) {
    case TYPE.search: {
      return action.payload.str;
    }

    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case TYPE.getFail:
    case TYPE.getSearchedTracksFail: {
      return action.payload.error;
    }

    default:
      return state;
  }
}

function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case TYPE.isLoading: {
      return action.payload.bool;
    }

    default:
      return state;
  }
}

const collectionReducers = combineReducers({
  collection: collectionReducer,
  searchedTracks: searchedTracksReducer,
  searchInput: searchInputReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});

export default collectionReducers;
