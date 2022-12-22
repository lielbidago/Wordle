import {WordleContext} from "../context/WordleContext";
import { useState, useContext, useRef } from "react";


export function useWordle(){

    let screenBoard =[  
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']];

    const keyboardLetters = [  ['Q','W','E','R','T','Y','U','I','O','P'],
                            ['A','S','D','F','G','H','J','K','L'],
                            ['Z','X','C','V','space','B','N','M']];

    const pRef = useRef(null);
    
    const [currentBoard, setCurrentBoard] = useState(screenBoard);
    const [currLetterPointer, setCurrLetterPointer] = useState({
    x: 0,
    y: 0,
    pRef: pRef});
    const [modalShowState, setmodalShowState] = useState(false);

    function addLetterToBoard(letterKey){
        
        // const {currentBoard, setCurrentBoard,currLetterPointer, setCurrLetterPointer} = useContext(WordleContext);
        
        const newBoard = currentBoard.map((rowWord,wordInd:number)=>(

            (currLetterPointer.y===wordInd)? currentBoard[wordInd].map((cell, cellInd)=>(

                cellInd===currLetterPointer.x? letterKey : currentBoard[wordInd][cellInd]))
                
                :currentBoard[wordInd])
        )
        
        setCurrentBoard(newBoard);
        
    }

    function moveCurrLetterPointer(){

        // const {currLetterPointer, setCurrLetterPointer} = useContext(WordleContext);
        const newPointer = {x:null, y:null, pRef:pRef};

        if(currLetterPointer.x===4 && currLetterPointer.y===4){

            (()=>(alert('congrats!! you won!!')))();
            // newPointer.x = null;
            // newPointer.y = null;

        }else if (currLetterPointer.x===4){

            (()=>(alert('done!')))();

            newPointer.x = 0;
            newPointer.y = currLetterPointer.y+1;

        }else if(currLetterPointer.x<4){

            newPointer.x = currLetterPointer.x+1;
            newPointer.y = currLetterPointer.y;
        }

        setCurrLetterPointer(newPointer);
        

    }

    function useModalHelp(show){

        setmodalShowState(show);

    }


    return ({
        addLetterToBoard,
        moveCurrLetterPointer,
        currentBoard,
        setCurrentBoard,
        currLetterPointer,
        setCurrLetterPointer,
        modalShowState,
        setmodalShowState,
        useModalHelp,
        keyboardLetters, 
    }
    );

}
