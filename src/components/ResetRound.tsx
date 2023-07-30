import { useDispatch, useSelector } from "react-redux";
import restore from "./../images/reload.svg"
import { changeStatus, roundReturnDefault } from "../store/round";
import { AppDispatch, RootState } from "../store";

function ResetRound() {
    const status = useSelector((state:RootState) => state.round.status);
    const dispatch: AppDispatch = useDispatch();

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