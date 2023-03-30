import React from "react";
import './Scoreboard.css'

function Scoreboard({ points }) {
    return (
      <div className="Scoreboard">
        Current Score: { points }
       
      </div>
    );
  }
  
  export default Scoreboard;
  