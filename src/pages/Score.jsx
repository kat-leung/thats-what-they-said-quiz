import React from 'react';
import { useParams } from 'react-router-dom';


export default function Score() {
  const params = useParams();

  const numericScore = parseInt(params.score, 10);

  console.log(numericScore)

  const scoreData = require(`../assets/score.json`)

 

  return (
    <div>
      <h2>Final score: {numericScore}</h2>
      <img src={require(`../images/${params.score}.gif`)} alt="xero"></img>
      <p>{scoreData[numericScore].comment}</p>
    </div>
  );
}

