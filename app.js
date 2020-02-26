const log = console.log;
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("philadelphia", (error, data) => {
  log("error", error);
  log("data", data);
  forecast(data.latitude, data.longitude, (error, data) => {
    log("Error", error);
    log("Data", data);
  });
});
