import { useSelector } from "react-redux";
import { RoundStatus } from "../types/Round";
import { useEffect } from "react";
import { RootState } from "../store";

function Message() {
    const roundStatus: RoundStatus = useSelector((state:RootState) => state.round.status);

    return ( 
        <div className="game-message">
          {roundStatus !== 'progress' && (
            roundStatus !== 'draw' ? `${roundStatus} wins!` : roundStatus
          )}
        </div>
     );
}

export default Message;