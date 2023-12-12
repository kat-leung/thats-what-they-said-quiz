import React from "react"
import { useState, useEffect } from "react"
import bubble from "../images/speech-bubble.png"
import andy from "../images/andy cutout bw.png"
import angela from "../images/angela cutout bw.png"
import creed from "../images/creed cutout bw.png"
import dwight from "../images/dwight cutout bw.png"
import jan from "../images/jan cutout bw.png"
import jim from "../images/jim cutout bw.png"
import kelly from "../images/kelly cutout bw.png"
import kevin from "../images/kevin cutout bw.png"
import meredith from "../images/meredith cutout bw.png"
import michael from "../images/michael cutout bw.png"
import oscar from "../images/oscar cutout bw.png"
import pam from "../images/pam cutout bw.png"
import phyllis from "../images/phyllis cutout bw.png"
import ryan from "../images/ryan cutout bw.png"
import stanley from "../images/stanley cutout bw.png"
import toby from "../images/toby cutout bw.png"

import andyColour from "../images/andy cutout colour.png"
import angelaColour from "../images/angela cutout colour.png"
import creedColour from "../images/creed cutout colour.png"
import dwightColour from "../images/dwight coutout colour.png"
import janColour from "../images/jan cutout colour.png"
import jimColour from "../images/jim cutout colour.png"
import kellyColour from "../images/kelly cutout colour.png"
import kevinColour from "../images/kevin cutout colour.png"
import meredithColour from "../images/meredith cutout colour.png"
import michaelColour from "../images/michael cutout colour.png"
import oscarColour from "../images/oscar cutout colour.png"
import pamColour from "../images/pam cutout colour.png"
import phyllisColour from "../images/phyllis cutout colour.png"
import ryanColour from "../images/ryan cutout colour.png"
import stanleyColour from "../images/stanley cutout colour.png"
import tobyColour from "../images/toby cutout colour.png"

function ImageToggleButton({ defaultImage, hoverImage, altText, buttonText, setScore, character }) {
    const [isHovered, setIsHovered] = useState(false);
    
    function selectCharacter(buttonText){
        var firstName = character.split(' ')[0].toLowerCase();
        if (firstName === buttonText){
            setScore(prevScore => prevScore + 1)
        } else (setScore(prevScore => prevScore + 0))
    }


    return (
      <button
        className="button"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={()=> selectCharacter(buttonText)}
      >
        <img
          src={isHovered ? hoverImage : defaultImage}
          alt={altText}
        />
        {buttonText}
      </button>
    );
  }

  

export default function Quiz(){
    const [quoteData, setQuoteData] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('https://officeapi.akashrajpurohit.com/quote/random')
        .then((res) => {
            if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            setQuoteData(data);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
    }, [score]); 

   


    return (
        <div className="quiz">
            <div class="column column-1">
                <ImageToggleButton
                    defaultImage={oscar}
                    hoverImage={oscarColour}
                    altText="oscar martinez"
                    buttonText="oscar"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={angela}
                    hoverImage={angelaColour}
                    altText="angela martin office bitch"
                    buttonText="angela"
                    setScore={setScore}
                    character={quoteData.character}

                />
                <ImageToggleButton
                    defaultImage={pam}
                    hoverImage={pamColour}
                    altText="pam beesley"
                    buttonText="pam"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={ryan}
                    hoverImage={ryanColour}
                    altText="ryan howard"
                    buttonText="ryan"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={jim}
                    hoverImage={jimColour}
                    altText="jimothy halpert"
                    buttonText="jim"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={dwight}
                    hoverImage={dwightColour}
                    altText="dwight kurt schrute"
                    buttonText="dwight"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={kevin}
                    hoverImage={kevinColour}
                    altText="kevin post malone"
                    buttonText="kevin"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={jan}
                    hoverImage={janColour}
                    altText="jan levinson"
                    buttonText="jan"
                    setScore={setScore}
                    character={quoteData.character}
                />
            </div>
            <div class="column column-2">
                <div className="quiz-title"><p>Who said...</p></div>
                <div className="quote-container">
                    <div className="quote"><p>"{quoteData.quote}"</p></div>
                    <img className="bubble" src={bubble} alt="ripped paper cutout of a speech bubble"></img>
                </div>
                <div className="score"><p>score: {score} / 10</p></div>
            </div>
            <div class="column column-3">
                <ImageToggleButton
                    defaultImage={creed}
                    hoverImage={creedColour}
                    altText="creed bratton aka william charles schneider"
                    buttonText="creed"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={phyllis}
                    hoverImage={phyllisColour}
                    altText="phyllis lapin vance"
                    buttonText="phyllis"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={stanley}
                    hoverImage={stanleyColour}
                    altText="stanley the manley hudson"
                    buttonText="stanley"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={andy}
                    hoverImage={andyColour}
                    altText="andrew nardog bernard"
                    buttonText="andy"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={kelly}
                    hoverImage={kellyColour}
                    altText="kelly rajnigandha kapoor"
                    buttonText="kelly"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={michael}
                    hoverImage={michaelColour}
                    altText="michael gary scott"
                    buttonText="michael"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={meredith}
                    hoverImage={meredithColour}
                    altText="meredith palmer"
                    buttonText="meredith"
                    setScore={setScore}
                    character={quoteData.character}
                />
                <ImageToggleButton
                    defaultImage={toby}
                    hoverImage={tobyColour}
                    altText="toby flenderson aka the scranton strangler"
                    buttonText="toby"
                    setScore={setScore}
                    character={quoteData.character}
                />
            </div>
        </div>
    )
}