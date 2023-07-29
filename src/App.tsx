import React, { useEffect } from 'react';
import circle from './images/free-icon-circle-2089718.svg';
import cross from './images/free-icon-close-10833724.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RoundStatus } from './types/Round';
import { roundChecker } from './roundChecker';
import { changePosition, changeStatus, roundReturnDefault, toggleTurn } from './store/round';
import { changeScore } from './store/score';
import GamingField from './components/GamingFeild';
import Score from './components/Score';
import ResetGame from './components/ResetGame';

function App() {
  return (
    <div className="App">
      <Score></Score>
      <GamingField></GamingField>
      <ResetGame></ResetGame>
    </div>
  );
}

export default App;
