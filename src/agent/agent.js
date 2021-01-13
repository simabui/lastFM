import axios from 'axios';

axios.defaults.baseURL = 'http://ws.audioscrobbler.com/2.0/';

const { REACT_APP_API_KEY } = process.env;
export const getTopTracks = () =>
  axios.get(
    `?method=chart.gettoptracks&api_key=${REACT_APP_API_KEY}&format=json`,
  );

export const getArtist = id =>
  axios.get(
    `?method=artist.getinfo&mbid=${id}&api_key=${REACT_APP_API_KEY}&format=json`,
  );

export const getTrack = track =>
  axios.get(
    `?method=track.search&track=${track}&api_key=${REACT_APP_API_KEY}&format=json`,
  );
