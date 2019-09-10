//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./Component.css";

function ScoreLions() {
  const [scoreLions, setScoreLions] = useState(0);

  const TouchdownHome = () => {
    setScoreLions(scoreLions + 7);
  };

  const FieldgoalHome = () => {
    setScoreLions(scoreLions + 3);
  };
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>

        <div className="home__score"> {scoreLions} </div>
      </div>
      <section>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={TouchdownHome}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={FieldgoalHome}>
            Home Field Goal
          </button>
          <button
            className="homeButtons__safety"
            onClick={() => setScoreLions(scoreLions + 2)}
          >
            Home Safety
          </button>
        </div>
      </section>
    </div>
  );
}

export default ScoreLions;
