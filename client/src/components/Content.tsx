import React, { useContext } from "react";

import { contentContext } from "../contexts";
import "../styles/content.css";

export default function Content() {
    const contextData = useContext(contentContext);

    return (
        <div id="Content" className="d-flex m-auto">
            {
                contextData !== null? <span>{ contextData.text }</span> : null
            }
        </div>
    )
}