const selectLocation = (city, jobs) => ({
  type: "SWITCH LOCATION",
  city,
  jobs
});

export default selectLocation;
