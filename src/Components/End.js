import React from "react";
import './End.css'

function End({ points, resetGame }) {
    let difference = 11 - points;

    return (
      <div className="EndGame">
        <div className="DisplayScore">
            Score: { points }
        </div>

         <br/>

         { points < 11 ? 
            <div className="DisplayMsg">
            You missed { difference }! </div>
            : <div className="DisplayMsg"> You found them all! Great job!
            </div>
          }

         Would you like to play again? 
         <br />
         <button type='button' onClick= {(e) => {resetGame()}}>Yes</button>
      </div>
    );
  }
  
  export default End;
  