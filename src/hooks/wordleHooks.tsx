import { useState,useRef } from "react";
import { isWord, getWord,checkWord} from '../gameLogic/gameLogicFunctions'


export function useWordle(){

    const wordsBoard =[  
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']];


    const keyboardLetters = [  ['Q','W','E','R','T','Y','U','I','O','P'],
                            ['A','S','D','F','G','H','J','K','L'],
                            ['Z','X','C','V','space','B','N','M']];

    const pointRef = useRef(null);
    
    const [currentBoard, setCurrentBoard] = useState(wordsBoard);
    const [currLetterPointer, setCurrLetterPointer] = useState({
    x: 0,
    y: 0,
    pRef: pointRef});

    const [modalShowState, setmodalShowState] = useState(false);
    const [loginShowState, setloginShowState] = useState(false);

    const userName = localStorage.getItem('UserName');
    const user = userName? userName:'guest';
    const [CurrentUser, setCurrentUser] = useState(user);

    const [currentColorBoard, setCurrentColorBoard] = useState(wordsBoard);
    

    const currGameWord = getWord().toUpperCase();
    
    
    function addLetterToBoard(letterKey:string){
                
        const newBoard = currentBoard.map((rowWord,wordInd)=>
        (

            (currLetterPointer.y===wordInd)? 
                
                rowWord.map((cell, cellInd)=>(

                cellInd===currLetterPointer.x? letterKey : cell))
                
            :currentBoard[wordInd]
        ));
        
        setCurrentBoard(newBoard);
        
    }

    function moveCurrLetterPointer(){

        const newPointer = {x:null, y:null, pRef:pointRef};

        if(currLetterPointer.x===4 && currLetterPointer.y===4){

            (()=>(alert('congrats!! you won!!')))();
            // newPointer.x = null;
            // newPointer.y = null;

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
        // console.log('>>> entered useCurrentUser');
        // console.log('>>> name = '+name);
        // console.log('>>> entered CurrentUser = ' + CurrentUser);
        setCurrentUser(name); 
        // console.log(`>>> set ${CurrentUser} as current user`);
        localStorage.setItem('UserName', name);
    }


    function colorBoardUpdate(currentColorBoard: string[][], curPointer, currentBoard:string[][]){
        
        const currentWord = currentBoard[curPointer.y-1].join('');
        const wordStatus = checkWord(currGameWord,currentWord);
        const newBoard = currentColorBoard.map((line, index)=>
        index===curPointer.y-1? wordStatus:line);
            
        setCurrentColorBoard(newBoard);

        if(isWord(currentWord, currGameWord)){
            alert('success!!!');
            //success modal?
        }else{
            alert('fail:(');
        }
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

        currentColorBoard,
        colorBoardUpdate,

        
    }
    );

}
