import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
import 'bootstrap/dist/css/bootstrap.css';



export function HelpModal(){
    
    // function handleModalExit(e:React.MouseEvent<HTMLElement>){
        
    //     const {setmodalShowState} = useContext(WordleContext);
    //     setmodalShowState(false);

    // }
    
    const {useModalHelp} = useContext(WordleContext);

    const useModalExit = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(false);
    }

    // const useExitPress = (event:React.KeyboardEvent<HTMLDivElement>) =>{
    //     console.log(event.key);
    //     // if(event.key === 'ESC'){
    //     //     useModalHelp(false);
    //     // }
    // }


    return(
        <div className="modal-backdrop">
        <div className="Modal">
        <div className="Modal-header">
            <h2>Wordle Rules</h2>
            <button type="button" className="btn-close" aria-label="Close" onClick={useModalExit}></button>   
        </div>

        <p>You have to guess the hidden word in 6 tries,
            <br/>
            and the color of the letters changes to show how close you are.
            <br/>
            <br/>
            <span className="model-example-style" style={{backgroundColor:"lightgray"}}>grey</span> - means the letter isn't in the target word at all.
            <br/>
            <span className="model-example-style" style={{backgroundColor:"rgb(251, 238, 53)"}}>yellow</span> - means the letter is in the word but in the wrong spot.
            <br/>
            <span className="model-example-style" style={{backgroundColor:"rgb(18, 226, 198)"}}>green</span> - means the letter is in the word and in the correct spot.
        </p>
    </div>
    </div>
    );

    
    // return(
    //     <div className="modal fade" id="staticBackdrop" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    //         <div className="modal-dialog">
    //             <div className="modal-content">
    //                 <div className="modal-header">
    //             <h1 className="modal-title fs-5" id="staticBackdropLabel">Helpaaa</h1>
    //             <button type="button" className="btn-close" aria-label="Close" onClick={()=>{console.log("1")}}>Help</button>   
    //         </div>
    //         <div className="modal-body">
    //             <p>You have to guess the hidden word in 6 tries,
    //             <br/>
    //             and the color of the letters changes to show how close you are.
    //             <br/>
    //             grey - means the letter isn't in the target word at all.
    //             <br/>
    //             yellow - means the letter is in the word but in the wrong spot.
    //             <br/>
    //             green - means the letter is in the word and in the correct spot.
    //         </p>
    //         </div>
            
    //     </div>
    //     </div>
    //     </div>
    // );

}