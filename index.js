const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP("162.245.144.188", (error, coords) => {
  if (error) {
    console.log("Fetching coords didn't work!", error);
  } else {
    console.log("It worked! Returned Coords: ", coords);
  }
});

fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (error, data) => {
  if (error) {
    console.log("Fetching ISS flyover times didn't work!", error);
  } else {
    console.log("It worked! Returned Flyover times: ", data);
  }
});

//{ latitude: '49.26200', longitude: '-123.09230' }

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});