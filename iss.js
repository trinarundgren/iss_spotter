const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API

  request('https://api64.ipify.org/?format=json', (error, resp, body) => {
    if (error) return callback(error, null);
    if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    callback(null, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  
}


module.exports = { fetchMyIP, fetchCoordsByIP };
