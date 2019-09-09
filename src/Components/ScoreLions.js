//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./Component.css";

function ScoreLions() {
  const [scoreLions, setValueLions] = useState(0);
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>

        <div className="home__score"> {scoreLions} </div>
      </div>
      <section>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setValueLions(scoreLions + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setValueLions(scoreLions + 3)}
          >
            Home Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default ScoreLions;
