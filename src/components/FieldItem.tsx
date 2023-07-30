import { useDispatch } from "react-redux";
import { changePosition } from "../store/round";
import circle from './../images/free-icon-circle-2089718.svg';
import cross from './../images/free-icon-close-10833724.svg';
import { AppDispatch } from "../store";

type props = {
    entity: string,
    index: number,
}

function FieldItem({entity, index}: props) {


    const dispatch: AppDispatch = useDispatch();

    function clickField(e:React.MouseEvent<HTMLDivElement>) {
        if (e.target) {
            const fieldElement = e.target;
            if (fieldElement instanceof HTMLDivElement && !fieldElement.children.length) {
                const row = Number(fieldElement.getAttribute('data-row'));
                const column = Number(fieldElement.getAttribute('data-column'));
                dispatch(changePosition([row, column]));
            }
        }
    }

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
     );
}

export default FieldItem;