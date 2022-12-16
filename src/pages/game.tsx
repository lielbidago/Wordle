import {WordleContext} from "../context/WordleContext";
import { useState, useContext } from "react";
import { createContext } from "react";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";


export function GamePage(){

    let screenBoard =[  ['','','','',''],
                        ['','','','',''],
                        ['','','','',''],
                        ['','','','',''],
                        ['','','','','']];
                        
    const [currentBoard, setCurrentBoard] = useState(screenBoard);
    const [currLetterPointer, setCurrLetterPointer] = useState({
        x: 0,
        y: 0
      });

    // function handleLetterEnter(letter){
    //     const {currentBoard, setCurrentBoard,currLetterPointer, setCurrLetterPointer} = useContext(WordleContext);
    //     const newBoard = currentBoard.map((letter,index)=>(
            
    //     ))
    // }

    return (
        <WordleContext.Provider value = {{currentBoard, setCurrentBoard,currLetterPointer, setCurrLetterPointer}}>
            <WordleScreen/>
            <Keyboard/>
        </WordleContext.Provider>
    );


    

}