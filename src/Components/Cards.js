import React, { useState, useEffect } from "react";
import './Cards.css';
import a from './imgs/a.jpg'
import b from './imgs/b.jpg'
import c from './imgs/c.jpg'
import c5 from './imgs/c5.jpg'
import d from './imgs/d.jpg'
import d5 from './imgs/d5.jpg'
import e from './imgs/e.jpg'
import e5 from './imgs/e5.jpg'
import f from './imgs/f.jpg'
import f5 from './imgs/f5.jpg'
import g from './imgs/g.jpg'

import a5 from './sounds/a5.mp3'
import b5 from './sounds/b5.mp3'
import c4 from './sounds/c4.mp3'
import c5a from './sounds/c5.mp3'
import d4 from './sounds/d4.mp3'
import d5a from './sounds/d5.mp3'
import e4 from './sounds/e4.mp3'
import e5a from './sounds/e5.mp3'
import f4 from './sounds/f4.mp3'
import f5a from './sounds/f5.mp3'
import g4 from './sounds/g4.mp3'


const Cards = ({countPoint, points, gameOver}) => {

  const [cards, setCards] = useState([])
  //need to start with an empty array, otherwise useEffect will not run on first render

  const cardArray =  [
    {title: "card1",
  clicked: false,
  src: a,
  audio: a5 },
  {title: "card2",
  clicked: false,
  src: b,
  audio: b5  },
  {title: "card3",
  clicked: false,
  src: c,
  audio: c4  },
  {title: "card4",
  clicked: false,
  src: c5,
  audio: c5a  },
  {title: "card5",
  clicked: false,
  src: d,
  audio: d4  },
  {title: "card6",
  clicked: false,
  src: d5,
  audio: d5a  },
  {title: "card7",
  clicked: false,
  src: e,
  audio: e4  },
  {title: "card8",
  clicked: false,
  src: e5,
  audio: e5a  },
  {title: "card9",
  clicked: false,
  src: f,
  audio: f4  },
  {title: "card10",
  clicked: false,
  src: f5,
  audio: f5a  },
  {title: "card11",
  clicked: false,
  src: g,
  audio: g4  }
]
   
      const shuffle = (cardArray) => {
        //Fisher-Yeates shuffle algorithm
        for ( let i = cardArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
        }
        setCards(cardArray)
      }

      const playTurn = (e) => {
        let id = e.target.getAttribute("data-id");
        let selected = cards.filter(card => card.title === id)
        playAudio(selected[0].audio)
        setTimeout(() => {
          if (selected[0].clicked === false) {
            countPoint()
            selected[0].clicked = true
            shuffle(cards)
          } else {
            gameOver()
            shuffle(cardArray)
          }
        }, 600)
      }

      const playAudio = (i) => {
        new Audio(i).play()
      }


   useEffect(() => {
    //use JSON.stringify as dependency (vs just cards state) so an infiite loop isn't created due to original array continuously being altered
    shuffle(cardArray)
   }, [JSON.stringify(cardArray)])


    return (
        cards.map((item, index) => {
        return (
          <div className="Card" data-id= { item.title } key= { index } onClick= {(e) => {playTurn(e)}} 
          style={{
            backgroundImage: `url(${item.src})`
          }}>
                     
          </div>
          )
        })
      )

  }
   
  
  export default Cards;
