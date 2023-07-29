import { useSelector } from "react-redux";

function Score() {
    const score = useSelector(({score}) => score);

    return ( 
        <div className="game-manager">
            <div className="game-manager__entity">
                <span>Cross</span>
                <div className="game-manager__score">
                    {score.cross}
                </div>
            </div>
            <div className="game-manager__entity">
                <span>Circle</span>
                <div className="game-manager__score">
                    {score.zero}
                </div>
            </div>
        </div>
    );
}

export default Score;