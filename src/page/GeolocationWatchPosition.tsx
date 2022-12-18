import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export const GeolocationWatchPosition = () => {
    const [id, setId] = useState<number>(0)
    const [geolocationCoordinates, setGeolocationCoordinates] = useState<GeolocationCoordinates>({
        latitude: 0,
        longitude: 0,
        altitude: 0,
        accuracy: 0,
        altitudeAccuracy: 0,
        heading: 0,
        speed: 0
    })
    const [options, setOption] = useState({
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    })

    function success(pos: GeolocationPosition) {
        const crd = pos.coords;

        if (geolocationCoordinates.latitude === crd.latitude && geolocationCoordinates.longitude === crd.longitude) {
            console.log('Congratulations, you reached the target');
            // navigator.geolocation.clearWatch(id);
        }
        setGeolocationCoordinates(crd)
    }

    function error(err: GeolocationPositionError) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    useEffect(() => {
        setId(navigator.geolocation.watchPosition(success, error, options))
    }, [])
    return <>
        <h5>GeolocationWatchPosition</h5>
        <ol>
            <ul>
                <Typography variant={"h3"}>緯度</Typography>
                <div>{geolocationCoordinates.latitude}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>軽度</Typography>
                <div>{geolocationCoordinates.longitude}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>高度</Typography>
                <div>{geolocationCoordinates.altitude}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>latitude および longitude プロパティの精度をメートル単位</Typography>
                <div>{geolocationCoordinates.accuracy}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>altitude プロパティの精度をメートル単位で表す</Typography>
                <div>{geolocationCoordinates.altitudeAccuracy}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>端末が向かっている方向を表す </Typography>
                <div>{geolocationCoordinates.heading}</div>
            </ul>
            <ul>
                <Typography variant={"h3"}>端末の移動速度をメートル毎秒で表す </Typography>
                <div>{geolocationCoordinates.speed}</div>
            </ul>
        </ol>
    </>
}