// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('205.250.55.49', (error, data) => {
  if (error) {
   console.log("It didn't work!" , error);
   return 
  }
  console.log("It worked! Returned IP:" , data);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });