import React from "react";
import './Start.css'
import treble from './imgs/treble.svg'
import eighth from './imgs/8th.svg'
import quarter from './imgs/quarter.svg'

function Start({playGame}) {
    return (
      <div className="StartGame">
      <h1>Memory Game</h1>
        <br />
        <span className="content">See how many notes you can click without repeating any! </span>
        <br/>
        <button type='button' onClick={(e) => {playGame()}}>Let's play!</button>
        <br />

        <div className='Images'>
            <img src= { treble } alt='treble clef' />
            <img src= { eighth } alt='eighth note' />
            <img src= { quarter } alt='quarter note' />
        </div>
        

      </div>
    );
  }
  
  export default Start;
  