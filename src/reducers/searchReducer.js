import { FETCH_ARTIST_ERROR, FETCH_ARTIST_SUCCESS, FETCH_ARTIST_REQUEST } from '../actions/search';

const initialState = {
  events: [],
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ARTIST_REQUEST:
    return Object.assign({}, state, {loading: true})

    case FETCH_ARTIST_SUCCESS:
    return Object.assign({}, state, {loading: false, events: action.data})

    case FETCH_ARTIST_ERROR:
    return Object.assign({}, state, {loading: false, error: action.err})

    default:
    break;
  }
  return state;
}

