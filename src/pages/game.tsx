import {ScreenContext} from "../context/screenContext";
import { useState, useContext } from "react";
import { createContext } from "react";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";


export function GamePage(){

    let screenBoard =[['a','b','c','',''],
                        ['','','','',''],
                        ['','','','',''],
                        ['','','','',''],
                        ['','','','','']];
                        
    const [currentBoard, setCurrentBoard] = useState(screenBoard);

    return (
        <ScreenContext.Provider value = {{currentBoard, setCurrentBoard}}>
            <WordleScreen/>
            <Keyboard/>
        </ScreenContext.Provider>
    );


    

}