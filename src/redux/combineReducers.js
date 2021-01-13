import { combineReducers } from 'redux';
import collectionReducers from './tracks/tracksReducer';

// store object
const rootReducer = combineReducers({
  tracks: collectionReducers,
});

export default rootReducer;
