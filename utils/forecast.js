const request = require("request");

const forecast = (lon, lat, callback) => {
  const url =
    "https://api.darksky.net/forecast/c8ae351c82fc5c972c86631172e95892/" +
    lat +
    "," +
    lon +
    "?lang=en";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services...", undefined);
    } else if (body.length === 0) {
      callback("Unable to find Location. Try another Search:", undefined);
    } else {
      callback(
        undefined,
        console.log(
          `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability} % chance of rain!`
        )
      );
    }
  });
};

module.exports = forecast;
