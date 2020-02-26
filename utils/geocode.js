const request = require("request");

const geocode = (address, callback) => {
  const mapBoxUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY2hpY2Fnb2pvZTE5OTEiLCJhIjoiY2s2enQzbXdrMWJ5bzNscnhvaGxxbjdqMSJ9.Rcs3FtldcXCX8qzkOK1HkQ&limit=1";
  request({ url: mapBoxUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services...", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find Location. Try another Search:", undefined);
    } else {
      callback("", {
        longitude: response.body.features[0].center[1],
        latitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
