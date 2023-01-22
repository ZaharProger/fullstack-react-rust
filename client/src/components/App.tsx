import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "../styles/body.css";
import { RouteTypes } from "../globalConstants";
import Content from "./Content";
import Navbar from "./Navbar";
import { contentContext } from "../contexts";
import IContentContext from "../interfaces/IContentContext";

export default function App() {
    const navigate = useNavigate();
    const [contextData, setContextData] = useState<IContentContext>(null);

    useEffect(() => {
        const performApiCall = async (route: RouteTypes) => {
            console.log(route);
            
            const response = await fetch(route, {
                method: 'GET'
            });

            if (response.ok) {
                const { result, data } = await response.json();
                setContextData(result? { text: data.toUpperCase() } : null);
                navigate(route);
            }
        }

        const buttons = document.getElementById("Navbar").querySelectorAll("i");
        buttons.forEach(button => {
            button.onclick = () => {
                buttons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');

                performApiCall(button.classList.contains('fa-house')? 
                RouteTypes.HOME : RouteTypes.ABOUT);
            }
        });

        performApiCall(RouteTypes.HOME);
    }, []);

    return (
        <div id="App" className="d-flex flex-column w-100 h-100">
            <Navbar />
            <contentContext.Provider value={ contextData }>
                <Routes>
                    <Route path={ RouteTypes.HOME } element={ <Content /> } />
                    <Route path={ RouteTypes.ABOUT } element={ <Content /> } />
                </Routes>
            </contentContext.Provider>
        </div>
    )
}