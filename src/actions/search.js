// import { tkmBaseUrl } from '../components/fetchcall'
import {search} from '../components/fetchcall';
export const FETCH_ARTIST_REQUEST = 'FETCH ARTIST REQUEST';
export const FETCH_ARTIST_SUCCESS = 'FETCH ARTIST SUCCESS';
export const FETCH_ARTIST_ERROR = 'FETCH ARTIST ERROR';

 //sync action
export const fetchByArtistRequest = () => ({
  type: FETCH_ARTIST_REQUEST
})

export const fetchByArtistSuccess = data =>({
  type: FETCH_ARTIST_SUCCESS,
  data
})

export const fetchByArtistError = err => ({
  type: FETCH_ARTIST_ERROR,
  err
})

// export const fetchByArtist = () => {
//   return function(dispatch) {
//     dispatch(fetchByArtistRequest());
//     fetch(tkmBaseUrl).then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     }).then(events => dispatch(fetchByArtistSuccess(events)))
//     .catch(err => dispatch(fetchByArtistError(err)));
//   }
// }

export const searchArtist = name => dispatch => {
  dispatch(fetchByArtistRequest())
  return search(name)
    .then(res => dispatch(fetchByArtistSuccess(res)))
    .catch(err => dispatch(fetchByArtistError(err)))
}