import { useDispatch, useSelector } from "react-redux";
import restore from "./../images/reload.svg"
import { changeStatus, roundReturnDefault } from "../store/round";

function ResetRound() {
    const status = useSelector(({round}) => round.status);
    const dispatch = useDispatch();

    function resetRound() {
        dispatch(roundReturnDefault())
        dispatch(changeStatus('progress'))
    }

    return (
        <>
            {(status !== "progress") && (
                <div className="round-reset" onClick={() => resetRound()}>
                    <div className="round-reset__button">
                        <img src={restore} alt="" />
                    </div>
                </div>
            )}
        </>
    );
}

export default ResetRound;