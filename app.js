const log = console.log;
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const city = process.argv[2];

geocode(city, (error, { location, latitude, longitude }) => {
  if (error) {
    return log(error);
  } else if (!city) {
    return log("Please enter a city:");
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return log(error);
    }
    log(location);
    log(forecastData);
  });
});
