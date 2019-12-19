//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // setting up the state value for Lions score
  const [LionsHomeScore, setLionsHomeScore] = useState(0);
  // const [LionsAwayScore, setLionsAwayScore] = useState(0);


  // setting up the state value for Tigers team score
  const [TigersHomeScore, setTigersHomeScore] = useState(0);
  // const [TigersAwayScore, setTigersAwayScore] = useState(0);


  // Handlers for lions

  // There will be two buttons for each team - one will increment that team's score by three points (for a "field goal") and the other will increment that team's score by seven points (for a "touchdown" and "extra point").
  const handleLionsFieldGoal = e => {
  setLionsHomeScore(LionsHomeScore + 3);
 
  };

  const handleLionsTouchDown = e => {
  setLionsHomeScore(LionsHomeScore + 7 );

  };

// Handlers for tigers
  const handleTigersFielGoal = e => {
setTigersHomeScore(TigersHomeScore + 3);
    
  };

  const handleTigersTouchDown = e => {
  setTigersHomeScore(TigersHomeScore+ 7);
    
  };




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> {LionsHomeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"> {TigersHomeScore} </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={handleLionsTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
        
          <button onClick={handleLionsFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={handleTigersTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          
          <button onClick={handleTigersFielGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

// In this project, you build an app that diplays a scoreboard for an american football game. There will be two buttons for each team - one will increment that team's score by three points (for a "field goal") and the other will increment that team's score by seven points (for a "touchdown" and "extra point"). The css is already done for you. You should focus your efforts on the functionality of the app.
