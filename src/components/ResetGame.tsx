import { useDispatch } from "react-redux";
import { changeStatus, roundReturnDefault } from "../store/round";
import { scoreReturnDefault } from "../store/score";
import { AppDispatch } from "../store";

function ResetGame() {
    const dispatch: AppDispatch = useDispatch();

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