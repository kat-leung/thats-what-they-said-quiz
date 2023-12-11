import React from "react"
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

export default function Quiz(){
    return (
        <div className="quiz">
            <div class="column column-1">
                <button class="button"><img src={oscar} alt="oscar martinez"></img>oscar</button>
                <button class="button"><img src={angela} alt="angela martin office bitch"></img>angela</button>
                <button class="button"><img src={pam} alt="pam beesley"></img>pam</button>
                <button class="button"><img src={ryan} alt="ryan howard"></img>ryan</button>
                <button class="button"><img src={jim} alt="jimothy halpert"></img>jim</button>
                <button class="button"><img src={dwight} alt="dwight kurt schrute"></img>dwight</button>
                <button class="button"><img src={kevin} alt="kevin post malone"></img>kevin</button>
                <button class="button"><img src={jan} alt="jan levinson"></img>jan</button>
            </div>
            <div class="column column-2">
                <div className="quiz-title"><p>Who said...</p></div>
                <div className="quote-container">
                    <div className="quote"><p>"I am Beyoncé always"</p></div>
                    <img className="bubble" src={bubble} alt="ripped paper cutout of a speech bubble"></img>
                </div>
                <div className="score"><p>score: 0 / 10</p></div>
            </div>
            <div class="column column-3">
                <button class="button"><img src={creed} alt="creed bratton aka william charles schneider"></img>creed</button>
                <button class="button"><img src={phyllis} alt="phyllis lapin vance"></img>phyllis</button>
                <button class="button"><img src={stanley} alt="stanley the manley hudson"></img>stanley</button>
                <button class="button"><img src={andy} alt="andrew nardog bernard"></img>andy</button>
                <button class="button"><img src={kelly} alt="kelly rajnigandha kapoor"></img>kelly</button>
                <button class="button"><img src={michael} alt="michael gary scott"></img>michael</button>
                <button class="button"><img src={meredith} alt="meredith palmer"></img>meredith</button>
                <button class="button"><img src={toby} alt="toby flenderson aka scranton strangler"></img>toby</button>
            </div>
        </div>
    )
}