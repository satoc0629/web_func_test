import {Link} from "react-router-dom";
import {DetectingDeviceOrientation} from "./DetectingDeviceOrientation";

export const TopPage = () => {
    return <>
        <h1>TopPage</h1>
        <ol>
            <li><Link to={"/GeolocationWatchPosition"}>GeolocationWatchPosition</Link></li>
            <li><Link to={"/DetectingDeviceOrientation"}>DetectingDeviceOrientation</Link></li>
        </ol>
    </>
}