import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export const DetectingDeviceOrientation = () => {
    const [deviceOrientationEvent, setDeviceOrientationEvent] = useState<DeviceOrientationEvent>({
        absolute: false,
        alpha: 0,
        beta: 0,
        gamma: 0
    } as DeviceOrientationEvent)

    function handleOrientation(event: DeviceOrientationEvent) {
        setDeviceOrientationEvent(event)
    }

    useEffect(() => {
        window.addEventListener("deviceorientation", handleOrientation, true);
    })

    const arr = [
        {name: 'absolute', value: deviceOrientationEvent?.absolute, description: ""},
        {
            name: 'alpha',
            value: deviceOrientationEvent?.alpha,
            description: "z 軸を中心にした端末の動きを表し、0 以上 360 未満の範囲による度数で表されます。"
        },
        {
            name: 'beta',
            value: deviceOrientationEvent?.beta,
            description: "x 軸を中心にした端末の動きを表し、-180 以上 180 未満の範囲の値による度数で表されます。これは端末の前後の動きです。"
        },
        {
            name: 'gamma',
            value: deviceOrientationEvent?.gamma,
            description: " y 軸を中心にした端末の動きを表し、-90 以上 90 未満の範囲の値による度数で表されます。これは端末の左右の動きです。"
        },
    ]

    return <>
        {arr.map(e => {
            return <div>
                <Typography>{e.name}</Typography>
                <Typography>{e.value}</Typography>
                <Typography>{e.description}</Typography>
            </div>
        })}
    </>
}