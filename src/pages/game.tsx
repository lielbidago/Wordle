import {WordleContext} from "../context/WordleContext";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";
import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';


export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, setmodalShowState, useModalHelp, addLetterToBoard,
         moveCurrLetterPointer, currLetterPointer} = WordleAPI;

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    // useEffect(()=>{
    //     gameRef.current.focus();
    // },[])

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if ("qwertyuioplkjhgfdsazxcvbnm".includes(event.key)){
            
            addLetterToBoard((event.key).toUpperCase());
            moveCurrLetterPointer();
            currLetterPointer.pRef.current.focus();
        }else{
            (()=>alert('not a letter!'))();
        }

    }

    const gameRef = useRef(null);
    

    return (
        <WordleContext.Provider value = {WordleAPI}>
            <div className={"game"} onKeyDown={useKeyboardEnter} ref={gameRef}>
                <header>
                    <span><h1>Wordle</h1><p>By Liel</p></span>
                    <div className="help-section">
                        <button onClick={useHelpClick} type="button" className="btn btn-info">help</button>
                    </div>
                </header>
                <WordleScreen/>
                <Keyboard/>
                {modalShowState && <HelpModal/>}
            </div>
            
        </WordleContext.Provider>
    );


    

}