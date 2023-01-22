import React from 'react';

import "../styles/navbar.css";

export default function Navbar() {
    return (
        <div id="Navbar" className="d-flex flex-row mt-3 ms-2 pt-2 pb-2 pe-3 ps-3">
            <i className="fa-solid fa-house me-5 active"></i>
            <i className="fa-solid fa-question"></i>
        </div>
    )
}