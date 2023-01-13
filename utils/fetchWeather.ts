const fetchWeather = async (lat: number, lon: number) => {
  const weatherApi = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`
  );
  const weatherData = await weatherApi.json();

  const temperature: number =
    weatherData.properties.timeseries[0].data.instant.details.air_temperature;

  let icon: string;

  const hour = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  ).getHours();

  icon =
    temperature <= 0
      ? hour >= 20
        ? "bi bi-cloud-moon-fill"
        : "bi bi-cloud-fill"
      : hour >= 20
      ? "bi bi-moon-fill"
      : "bi bi-brightness-high-fill";

  return { temperature, icon };
};

export default fetchWeather;
