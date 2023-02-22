import OvercastClouds from "../assets/images/evening-cloudy.svg";
import SnowIcon from "../assets/images/snow.png";
import ClearSky from "../assets/images/sunny.svg";
import FewClouds from "../assets/images/day-cloudy.svg";
import ScatteredClouds from "../assets/images/night-cloudy.svg";
import ClearSkyNight from "../assets/images/night.svg";
export const WeatherIcon = ({description}: Record<string, string>) => {
    let imgSource: string = '';

    switch (description) {
        case 'overcast clouds': {
            imgSource = OvercastClouds;
            break;
        }
        case 'light snow': {
            return <img src={SnowIcon} width={40} height={40} alt={description}/>
            break;
        }
        case 'clear sky': {
            imgSource = ClearSky;
            break;
        }
        case 'few clouds': {
            imgSource = FewClouds;
            break;
        }
        case 'scattered clouds': {
            imgSource = ScatteredClouds;
            break;
        }
        case 'broken clouds': {
            imgSource = ClearSkyNight;
        }

    }
    return <img src={imgSource} alt={description}/>
}