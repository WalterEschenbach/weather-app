const log = console.log;
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const city = process.argv[2];

geocode(city, (error, data) => {
  if (error) {
    return log(error);
  } else if (!city) {
    return log("Please enter a city:");
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return log(error);
    }
    log(data.location);
    log(forecastData);
  });
});
