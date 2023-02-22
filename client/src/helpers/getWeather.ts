import axios from 'axios';

const WEATHER_API = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "a2cbf6e830ad7617b647a16b12b96710";

export const getWeather = async (latitude: number, longitude: number) => {
    const url = `${WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&cnt=4&units=metric`;
    const response = await axios.get(url);

    return response;
};

const weatherApi = {
    getWeather,
}

export default weatherApi;