import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { makeTurn } from './store/round';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(makeTurn([1,2]))
  }, [])

  return (
    <div className="App">
      <div className="game-field">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(kek => (
          <div key={kek.toString()} className="game-field__item"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
