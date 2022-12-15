

export function LetterTile(tileValue:string){
    return(
        <input readOnly className="tile" value={tileValue}></input>
    );
}