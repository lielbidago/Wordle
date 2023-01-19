import { useState,useRef } from "react";
import { isWord, getWord,checkWord} from '../gameLogic/gameLogicFunctions'

export interface wordleLetter{
    char: string,
    ref:React.RefObject<HTMLElement> | null,
    color:'white'|'green'|'yellow'|'grey',
    x:number,
    y:number
}

export function useWordle(){

    const wordleState:wordleLetter[][] =[  
    [{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null}],
    [{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null}],
    [{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null}],
    [{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null}],
    [{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null},{char:'', ref:null,color:'white', x:null, y:null}],
    ];

    // const wordsBoard=[  
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','','']];

    const keyboardLetters = [  ['Q','W','E','R','T','Y','U','I','O','P'],
                            ['A','S','D','F','G','H','J','K','L'],
                            ['Z','X','C','V','space','B','N','M']];

    const pointRef = useRef(null);
    
    const [currentBoard, setCurrentBoard] = useState(wordleState);
    const [currLetterPointer, setCurrLetterPointer] = useState({
    x: 0,
    y: 0,
    pRef: pointRef});

    const [modalShowState, setmodalShowState] = useState(false);
    const [loginShowState, setloginShowState] = useState(false);

    const userName = localStorage.getItem('UserName');
    const user = userName? userName:'guest';
    const [CurrentUser, setCurrentUser] = useState(user);

    // const [currentColorBoard, setCurrentColorBoard] = useState(wordsBoard);
    

    const currGameWord = getWord().toUpperCase();
    
    
    function addLetterToBoard(letterKey:string){
                
        const newBoard = currentBoard.map((rowWord,wordInd)=>
        (

            (currLetterPointer.y===wordInd)? 
                
                rowWord.map((cell, cellInd)=>(

                cellInd===currLetterPointer.x? {...cell, char:letterKey, x:cellInd, y:wordInd} : cell))
                
            :currentBoard[wordInd]
        ));
        
        setCurrentBoard(newBoard);
        
    }

    function moveCurrLetterPointer(){

        const newPointer = {x:null, y:null, pRef:pointRef};

        if(currLetterPointer.x===4 && currLetterPointer.y===4){

            (()=>(alert('congrats!! you won!!')))();

        }else if (currLetterPointer.x===4){
            
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

    function useModalLogin(show:boolean){

        setloginShowState(show);

    }

    function useCurrentUser(name:string){

        setCurrentUser(name); 

        localStorage.setItem('UserName', name);
    }


    function BoardUpdate(curPointer, currentBoard:wordleLetter[][]){
        
        const PrevWordIndex = curPointer.y-1;
        
        const currentWord = currentBoard[PrevWordIndex]
        .map((letterObj)=>letterObj.char).join('');

        const wordStatus = checkWord(currGameWord,currentWord);
        
        const newBoard = currentBoard.map((line, index)=>
        {if(index===PrevWordIndex){
            return currentBoard[index].map((letterObj, index)=>({...letterObj, color:wordStatus[index]}))
        }else{
            return line;
        }});
            
        setCurrentBoard(newBoard);

        if(isWord(currentWord, currGameWord)){
            alert('success!!!');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }else{
            alert('fail:(');
        }
    }

    const useLetterEnter = (key:string) =>{
        addLetterToBoard(key);
        moveCurrLetterPointer();
        currLetterPointer.pRef.current.focus();
    }

    const useLogin = (name:string) =>{
        useCurrentUser(name);
        useModalLogin(false);
    }


    return ({
        addLetterToBoard,
        currentBoard,
        setCurrentBoard,

        moveCurrLetterPointer,
        currLetterPointer,
        setCurrLetterPointer,
        
        modalShowState,
        setmodalShowState,
        useModalHelp,

        keyboardLetters, 
        
        useModalLogin,
        loginShowState,
        useCurrentUser,
        CurrentUser,

        // currentColorBoard,
        colorBoardUpdate,

        useLogin,
        useLetterEnter
    }
    );

}
