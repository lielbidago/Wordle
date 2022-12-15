

export function Key(props){
    
    return (
        <button className="key" id={'k'+ props.keyValue}>{props.keyValue}</button>
    );
}