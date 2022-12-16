

export function Key(props){
    
    return (
        <button className="key" key={'k'+ props.keyValue}>{props.keyValue}</button>
    );
}