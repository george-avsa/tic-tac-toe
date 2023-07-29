import { useDispatch } from "react-redux";
import { changeStatus, roundReturnDefault } from "../store/round";
import { scoreReturnDefault } from "../store/score";

function ResetGame() {
    const dispatch = useDispatch();

    function resetGame() {
        dispatch(roundReturnDefault())
        dispatch(scoreReturnDefault())
        dispatch(changeStatus('progress'))
    }

    return ( 
        <div className="game-reset" onClick={() => resetGame()}>
            Reset Game
        </div>
    );
}

export default ResetGame;