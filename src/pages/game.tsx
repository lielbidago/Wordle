import {WordleContext} from "../context/WordleContext";
import { useState, useContext } from "react";
import { createContext } from "react";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";
import 'bootstrap/dist/css/bootstrap.css';


export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, setmodalShowState, useModalHelp, addLetterToBoard, moveCurrLetterPointer,} = WordleAPI;

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if ("qwertyuioplkjhgfdsazxcvbnm".includes(event.key)){
            addLetterToBoard((event.key).toUpperCase());
            moveCurrLetterPointer();
        }
    }
    return (
        <WordleContext.Provider value = {WordleAPI}>
            <div className="game" onKeyDown={useKeyboardEnter}>
                <header>
                    <h1>Wordle<h6>By Liel</h6></h1>
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