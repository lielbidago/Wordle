import {WordleContext} from "../context/WordleContext";
import { useState, useContext } from "react";
import { createContext } from "react";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";


export function GamePage(){

    const WordleAPI = useWordle();

    // let screenBoard =[  ['','','','',''],
    //                     ['','','','',''],
    //                     ['','','','',''],
    //                     ['','','','',''],
    //                     ['','','','','']];
                        
    // const [currentBoard, setCurrentBoard] = useState(screenBoard);
    // const [currLetterPointer, setCurrLetterPointer] = useState({
    //     x: 0,
    //     y: 0
    //   });

    // function useHandleLetterEnter(letterKey){
        
    //     const {currentBoard, setCurrentBoard} = useContext(WordleContext);
        
    //     const newBoard = currentBoard.map((word,wordInd:number)=>(

    //         (currLetterPointer.y===wordInd)? currentBoard[wordInd].map((cell, cellInd)=>(

    //             cellInd===currLetterPointer.x? letterKey : currentBoard[wordInd][cellInd]))
                
    //             :currentBoard[wordInd])
    //     )
        
    //     setCurrentBoard(newBoard);
    //     useCurrLetterPointer();
    // }

    // function useCurrLetterPointer(){

    //     const {currLetterPointer, setCurrLetterPointer} = useContext(WordleContext);
    //     const newPointer = {x:null, y:null};

    //     if(currLetterPointer.x===4 && currLetterPointer.y===4){

    //         (()=>(alert('congrats!! you won!!')))();

    //     }else if (currLetterPointer.x===4){

    //         newPointer.x = 0;
    //         newPointer.y = currLetterPointer.y+1;

    //     }else if(currLetterPointer.x<4){

    //         newPointer.x = currLetterPointer.x+1;
    //         newPointer.y = currLetterPointer.y;
    //     }

    //     setCurrLetterPointer(newPointer);

    // }

    return (
        <WordleContext.Provider value = {WordleAPI}>
            <WordleScreen/>
            <Keyboard/>
        </WordleContext.Provider>
    );


    

}