import {useState} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {TopPage} from "./page/TopPage";
import {GeolocationWatchPosition} from "./page/GeolocationWatchPosition";
import {Container, Paper} from "@mui/material";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TopPage/>,
        },
        {
            path: "/GeolocationWatchPosition",
            element: <GeolocationWatchPosition/>
        }
    ])
    return <Container>
        <Paper>
            <RouterProvider router={router}/>
        </Paper>
    </Container>
}

export default App
