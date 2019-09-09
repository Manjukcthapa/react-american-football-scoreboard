import "./Component.css";
import React, { useState } from "react";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [Ballon, setBallon] = useState(1);
  const [Down, setDown] = useState(1);
  const [ToGo, setToGo] = useState(1);

  const nextQuarter = () => {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    }
  };

  const ballOn = () => {
    setBallon(Ballon + 1);
  };

  const nextDown = () => {
    setDown(Down + 1);
  };

  const nextToGo = () => {
    setToGo(ToGo + 1);
  };

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{Down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{ToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{Ballon}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className='maindivbutton'>
      <div className="allbutton">
          <button onClick={nextDown} className="button">
            Down
          </button>
        </div>
        <div className="allbutton">
          <button onClick={nextToGo} className="button">
            To Go
          </button>
        </div>

        <div className="allbutton">
          <button onClick={ballOn} className="button">
            BallOn
          </button>
        </div>

        <div className="allbutton">
          <button onClick={nextQuarter} className="button">
            Next Quarter
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default BottomRow;
