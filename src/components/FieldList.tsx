import { useSelector } from 'react-redux';
import FieldItem from './FieldItem';


function FieldList() {
    const gamingField = useSelector(({round}) => round.position);

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