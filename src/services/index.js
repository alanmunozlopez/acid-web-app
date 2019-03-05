
const ForecastService = {};

ForecastService.get = async location => {
  let url = `https://api.alanmunoz.pro/v1/forecast?lat=${location.lat}&lng=${location.lng}`;
  let forecastResponse = await fetch(url);
  let data = await forecastResponse.json();

  return data.forecast;
}

export default ForecastService;
