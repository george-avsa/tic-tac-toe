import { useSelector } from "react-redux";
import { RoundStatus } from "../types/Round";
import { useEffect } from "react";

function Message() {
    const roundStatus: RoundStatus = useSelector(({round}) => round.status);

    return ( 
        <div className="game-message">
          {roundStatus !== 'progress' && (
            roundStatus !== 'draw' ? `${roundStatus} wins!` : roundStatus
          )}
        </div>
     );
}

export default Message;