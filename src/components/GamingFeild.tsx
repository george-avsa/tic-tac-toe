import { useDispatch, useSelector } from "react-redux";
import { changePosition, changeStatus, roundReturnDefault, toggleTurn } from "../store/round";

import { useEffect } from "react";
import { changeScore } from "../store/score";
import { roundChecker } from "../roundChecker";
import Message from "./Message";
import FieldList from "./FieldList";
import ResetRound from "./ResetRound";

function GamingField() {
    const gamingField = useSelector(({round}) => round.position);
    const roundStatus = useSelector(({round}) => round.status);
    const turn = useSelector(({round}) => round.turn);

    const dispatch = useDispatch();

    useEffect(() => {
        const result = roundChecker(gamingField, turn);
        if (result === 'progress') {
          dispatch(toggleTurn())
        } else {
            dispatch(changeStatus(result))
        }
      }, [gamingField])

    useEffect(() => {
        if (roundStatus === 'cross' || roundStatus === 'zero') {
          dispatch(changeScore(turn))
        }
      }, [roundStatus])

    return ( 
        <div className="game-field">
            <Message></Message>
            <FieldList></FieldList>
            <ResetRound></ResetRound>
        </div>    
    );
}

export default GamingField;