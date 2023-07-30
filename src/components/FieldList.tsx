import { useSelector } from 'react-redux';
import FieldItem from './FieldItem';
import { RootState } from '../store';


function FieldList() {
    const gamingField = useSelector((state:RootState) => state.round.position);

    return ( 
        <>
            {gamingField.flat(2).map((entity:string, index:number) => {
                return (
                    <FieldItem index={index} entity={entity}></FieldItem>
                )
            })}
        </>
     );
}

export default FieldList;