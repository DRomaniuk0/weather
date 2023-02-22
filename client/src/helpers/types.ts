export interface Main {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface Wind {
    deg: number;
    gust: number;
    speed: number;
}

export interface Period {
    dt_txt: string;
    dt: number;
    main: Main;
    visibility: number;
    weather: Weather[];
    wind: Wind;
}

export interface WeatherList {
    list: Period[];
}