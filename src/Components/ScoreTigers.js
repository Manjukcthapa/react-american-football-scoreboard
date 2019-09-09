import React, { useState, useEffect } from "react";
import "./Component.css";

const ScoreTigers = props => {
  const [scoreTigers, setScoreTigers] = useState(0);

  const TouchdownAway = () => {
    setScoreTigers(scoreTigers + 7);
  };

  const FieldgoalAway = () => {
    setScoreTigers(scoreTigers + 3);
  };

  const [timer, setTimer] = useState(100);
  useEffect(() => {
    const clock = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearTimeout(clock);
      }
    }, 1000);
  }, [timer]);
  return (
    <div className="topRow">
      
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score"> {scoreTigers} </div>
       
      </div>
      <div className="timer">00:{timer}</div>
      <section>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={TouchdownAway}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={FieldgoalAway}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScoreTigers;
