import React, { useEffect } from 'react';
import circle from './images/free-icon-circle-2089718.svg';
import cross from './images/free-icon-close-10833724.svg'
import { useDispatch, useSelector } from 'react-redux';
import { makeTurn } from './store/round';
import { RoundStatus } from './types/Round';

function App() {

  const gamingField = useSelector(({round}) => round.position.flat(2));
  
  const roundStatus: RoundStatus = useSelector(({round}) => round.status);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(gamingField)
  //   dispatch(makeTurn([1,2]))
  // }, [])

  function clickField(e:React.MouseEvent<HTMLDivElement>) {
    if (e.target) {
      const fieldElement = e.target;
      if (fieldElement instanceof HTMLDivElement && !fieldElement.children.length) {
        const row = Number(fieldElement.getAttribute('data-row'));
        const column = Number(fieldElement.getAttribute('data-column'));
        dispatch(makeTurn([row, column]));
      }
    }
  }

  return (
    <div className="App">
      <div className="game-field">
        <div className="game-message">
          {roundStatus !== 'progress' && (
            roundStatus !== 'draw' ? `${roundStatus} wins!` : roundStatus
          )}
        </div>
        {gamingField.map((entity:string, index:number) => {
          const row = Math.floor(index / 3) ;
          const column = index % 3;
          return (
            <div 
              className="game-field__item" 
              key={index.toString()} 
              data-row={row} 
              data-column={column} 
              onClick={e => clickField(e)}
            >
              {entity !== 'empty' && (
                <img src={`${entity === 'cross' ? cross : circle}`} />
              )}
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

export default App;
