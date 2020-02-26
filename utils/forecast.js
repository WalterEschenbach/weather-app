const request = require("request");

const forecast = (lon, lat, callback) => {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/c8ae351c82fc5c972c86631172e95892/" +
    lat +
    "," +
    lon +
    "?lang=en";

  request({ url: darkSkyUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services...", undefined);
    } else if (response.body.length === 0) {
      callback("Unable to find Location. Try another Search:", undefined);
    } else {
      callback(
        undefined,
        console.log(
          `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees outside. There is a ${response.body.currently.precipProbability} % chance of rain!`
        )
      );
    }
  });
};

module.exports = forecast;
