import {useState} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {TopPage} from "./page/TopPage";
import {GeolocationWatchPosition} from "./page/GeolocationWatchPosition";
import {Container, Paper} from "@mui/material";
import {DetectingDeviceOrientation} from "./page/DetectingDeviceOrientation";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TopPage/>,
            errorElement: <TopPage/>
        },
        {
            path: "/GeolocationWatchPosition",
            element: <GeolocationWatchPosition/>,
            errorElement: <TopPage/>
        },
        {
            path: "/DetectingDeviceOrientation",
            element: <DetectingDeviceOrientation/>,
            errorElement: <TopPage/>
        }
    ])
    return <Container>
        <Paper>
            <RouterProvider router={router}/>
        </Paper>
    </Container>
}

export default App
