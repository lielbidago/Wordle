interface props{
    toggleStatusModalShow():void,
    message:string
}

export function StatusModal({toggleStatusModalShow, message}:props){
    
    
    if(message !== `you got it!!`){
        return (        
        <div className="Modal mini">
            <div className="Modal-header">
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>toggleStatusModalShow()}></button>   
            </div>
            <h1>{message.slice(0, 18)}</h1>
            <h4>{message.slice( 19,35)}</h4>
            <p>{message.slice( 36)}</p>
        </div>)
    }
    
    return (
        <div className="Modal mini">
            <div className="Modal-header">
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>toggleStatusModalShow()}></button>   
            </div>
            <h1>{message}</h1>
        </div>
    )

}