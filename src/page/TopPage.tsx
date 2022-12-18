import {Link} from "react-router-dom";

export const TopPage = () => {
    return <>
        <h1>TopPage</h1>
        <Link to={"/GeolocationWatchPosition"}>GeolocationWatchPosition</Link>
    </>
}