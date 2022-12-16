import {WordleContext} from "../context/WordleContext";
import { useState, useContext } from "react";
import { createContext } from "react";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";


export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, setmodalShowState, useModalHelp} = WordleAPI;

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    return (
        <WordleContext.Provider value = {WordleAPI}>
            <header>
                <h1>my wordle game</h1>
                <span onClick={useHelpClick}>help</span>
            </header>
            <WordleScreen/>
            <Keyboard/>
            {modalShowState && <HelpModal/>}
        </WordleContext.Provider>
    );


    

}