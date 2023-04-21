const KEY = process.env.KEY_FROM_WEATHER_API;
const KEYTEST = '69027c75f714439fa3d04652220406'

const fetchDataFromRegion = async (region) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${KEYTEST}&q=${region}&aqi=no`
    const ResponseFromWeatherApi = await fetch(URL);
    const data = await ResponseFromWeatherApi.json();
    return data;
}

export default fetchDataFromRegion;