
import React, { useState ,useEffect} from 'react';
import "./Component.css";

const ScoreTigers = props => {
  const [scoreTigers, setValueTigers] = useState(0);
  const [ timer, setTimer ] =useState(100);
  useEffect( ()=>{
    const clock = setTimeout(()=>{
      if (timer > 0 ) {
        setTimer(timer-1)
      }
      else {
        clearTimeout(clock)
      }
    }, 1000)
}, [timer]


)
  return (
    <div className="topRow">
      <div className="timer">00:{timer}</div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score"> {scoreTigers} </div>
      </div>
      <section>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setValueTigers(scoreTigers + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setValueTigers(scoreTigers + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
};

export default ScoreTigers;
