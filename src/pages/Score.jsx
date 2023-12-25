import React from 'react';
import { Link, useParams } from 'react-router-dom';



export default function Score() {
  const params = useParams();

  const numericScore = parseInt(params.score, 10);

  console.log(numericScore)

  const scoreData = require(`../assets/score.json`)

 

  return (
    <div className='final-score'>
      <p className='final-score-banner'>Final score: {numericScore}</p>
      <div className='gif'>
        <img src={require(`../images/${params.score}.gif`)} alt="xero"></img>
      </div>
      <p className='comment'>{scoreData[numericScore].comment}</p>
      <Link to="/quiz"><button className="restart">try again</button></Link> 
    </div>
  );
}

