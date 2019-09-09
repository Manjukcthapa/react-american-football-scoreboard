//TODO: STEP 1 - Import the useState hook.
import React from 'react';
import "./App.css";
import ScoreTiger from "./Components/ScoreTigers";
import ScoreLion from "./Components/ScoreLions";
import ButtomRow from "./Components/BottomRow"


function App() {
  
  return (
    <div className="container">
      <ScoreTiger/>
      <ScoreLion/>
      <ButtomRow/>
     </div>
  );
}

export default App;
