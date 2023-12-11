import React from "react";
import { Link } from "react-router-dom"

export default function StartingScreen() {

    
    return (
        <div className="startscreen">
            <h1 className="title">That's what <span className="strikeout">she</span> they said!</h1>
            <Link to="quiz"><button className="start-quiz">start quiz</button></Link>            
        </div>
    )
}
