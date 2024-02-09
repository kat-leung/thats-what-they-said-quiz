import React from "react";
import { Link } from "react-router-dom"

export default function StartingScreen() {

    
    return (
        <div className="startscreen">
            <div className="the-office-banner"><p>the office</p></div>
            <h1 className="title">That's what <span className="strikeout">she</span> they said!</h1>
            <Link to="quiz"><button className="start-quiz">start quiz</button></Link>            
        </div>
    )
}
