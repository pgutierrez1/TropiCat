import React, { useState, useEffect } from "react";    
import Axios from "axios";
import Score from './components/score';

import './App.css';

function App() {
    const [scores, setScores] = useState([]);    
    
    useEffect(() => {    
        Axios.get("http://localhost:3001/scores")    
          .then((res) => {    
            setScores(res.data);    
          });    
    },[]);

    const scoresJSX = scores.map((item, index) => {

        return(
            <Score item={item} key={item.score_id} />
        )
    })

  return (
    <div className="App">
        <h1>Leaderboard</h1>
        <div className="scores">
            {scoresJSX}
        </div>
    </div>
  );
}

export default App;
