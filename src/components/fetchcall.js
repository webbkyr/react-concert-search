import { TKM_KEY } from '../config.js';
// import { connect } from 'react-redux';
// const querystring = require('querystring');

export const tkmBaseUrl = new URL('https://app.ticketmaster.com/discovery/v2/events')

// export function Data(input) {
//   const query = {
//     keyword: input,
//     countryCode: 'US',
//     key: TKM_KEY
//   }
//   let param = querystring.stringify(query);
//   // console.log(param)
//   // url.format({query: param})
// }

export function search(artist) {
  return fetch(`https://app.ticketmaster.com/discovery/v2/event.json?keyword=${artist}&apikey=${TKM_KEY}`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => console.log(data))
}


// export default connect()(Data);