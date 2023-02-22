import {useEffect, useState} from "react";

interface ILocation {
    longitude: number,
    latitude: number,
}
const useNavigations = (): ILocation => {
    const [location, setLocation] = useState<ILocation>({longitude: 0, latitude: 0})

    useEffect(() => {
        return window.navigator.geolocation.getCurrentPosition((position) => {
            return setLocation(position.coords)
        })
    }, [])

    return location;
}

export {useNavigations};