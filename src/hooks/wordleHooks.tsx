import { useState,useRef } from "react";
import { isWord, getWord,checkWord} from '../gameLogic/gameLogicFunctions'

export interface wordleLetter{
    char: string,
    color:string,
    x:number,
    y:number
}

export interface keyboardLetter{
    value:string,
    color:string
}

export function useWordle(){

    const wordleState:wordleLetter[][] =[  
    [{char:'',color:'white', x:0, y:0},{char:'',color:'white', x:1, y:0},{char:'',color:'white', x:2, y:0},{char:'',color:'white', x:3, y:0},{char:'', color:'white', x:4, y:0}],
    [{char:'',color:'white', x:0, y:1},{char:'',color:'white', x:1, y:1},{char:'',color:'white', x:2, y:1},{char:'',color:'white', x:3, y:1},{char:'' ,color:'white', x:4, y:1}],
    [{char:'',color:'white', x:0, y:2},{char:'',color:'white', x:1, y:2},{char:'',color:'white', x:2, y:2},{char:'',color:'white', x:3, y:2},{char:'', color:'white', x:4, y:2}],
    [{char:'',color:'white', x:0, y:3},{char:'',color:'white', x:1, y:3},{char:'',color:'white', x:2, y:3},{char:'',color:'white', x:3, y:3},{char:'',color:'white', x:4, y:3}],
    [{char:'',color:'white', x:0, y:4},{char:'',color:'white', x:1, y:4},{char:'',color:'white', x:2, y:4},{char:'',color:'white', x:3, y:4},{char:'',color:'white', x:4, y:4}],
    ];


    // const wordsBoard=[  
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','',''],
    //     ['','','','','']];

    const keyboardLetters:keyboardLetter[][] = [  [{value:'Q', color:''},{value:'W', color:''},{value:'E', color:''},{value:'R', color:''},{value:'T', color:''},{value:'Y', color:''},{value:'U', color:''},{value:'I', color:''},{value:'O', color:''},{value:'P', color:''}],
                            [{value:'A', color:''},{value:'S', color:''},{value:'D', color:''},{value:'F', color:''},{value:'G', color:''},{value:'H', color:''},{value:'J', color:''},{value:'K', color:''},{value:'L', color:''}],
                            [{value:'Z', color:''},{value:'X', color:''},{value:'C', color:''},{value:'V', color:''},{value:'space', color:''},{value:'B', color:''},{value:'N', color:''},{value:'M', color:''}]];

    const pointerRef = useRef(null);
    
    const [currentBoard, setCurrentBoard] = useState(wordleState);
    const [currentKeyBoard, setcurrentKeyBoard] = useState(keyboardLetters);
    const [currLetterPointer, setCurrLetterPointer] = useState({
    x: 0,
    y: 0,
    pRef: pointerRef});

    const [modalShowState, setmodalShowState] = useState(false);
    const [loginShowState, setloginShowState] = useState(false);

    const userName = localStorage.getItem('UserName');
    const user = userName? userName:'guest';
    const [CurrentUser, setCurrentUser] = useState(user);
    

    const currGameWord = getWord().toUpperCase();
    
    
    function addLetterToBoard(letterKey:string){
                
        const newBoard = currentBoard.map((rowWord,wordInd)=>
        (

            (currLetterPointer.y===wordInd)? 
                
                rowWord.map((cell, cellInd)=>(

                cellInd===currLetterPointer.x? {...cell, char:letterKey} : cell))
                
            :currentBoard[wordInd]
        ));
        
        setCurrentBoard(newBoard);
        
    }

    function moveCurrLetterPointer(){

        const newPointer = {x:null, y:null, pRef:pointerRef};

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


    function BoardUpdate(){
        
        const prevWordIndex = currLetterPointer.y-1;
        
        const currentWord = currentBoard[prevWordIndex]
        .map((letterObj)=>letterObj.char).join('');

        const wordStatus = checkWord(currGameWord,currentWord);
        
        const newBoard:wordleLetter[][] = 
        currentBoard.map((line, index)=>{

            if(index===prevWordIndex){
                return currentBoard[index].map((letterObj, index)=>({...letterObj, color:wordStatus[index]}));
            }else{
                return line;
            }}
        );
            
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

    function keyBoardUpdate(){

        const changedKeysLst = {}

        currentBoard.forEach((word) =>{

            word.forEach((letter)=>{

                if(letter.char !== '' && letter.color!=='white'){

                    if(Object.keys(changedKeysLst).includes(letter.char)){
                        
                        switch(changedKeysLst[letter.char]){
                            case 'green':
                                break;
                            case 'yellow':
                                if(letter.color === 'green'){
                                    changedKeysLst[letter.char] = 'green';
                                }
                                break;
                            case 'grey':
                                changedKeysLst[letter.char] = letter.char;
                                break;
                        }

                    }else{
                        changedKeysLst[letter.char] = letter.color;
                    }
                    
                }
            })
        });

        const newKeyBoard = currentKeyBoard.map((line)=>{
            line.map((key)=>{
                if(Object.keys(changedKeysLst).includes(key.value)){
                    key.color = changedKeysLst[key.value]
                }
                return key;
            })
        });
        
    }

    // const LetterEnter = (key:string) =>{
    //     addLetterToBoard(key);
    //     moveCurrLetterPointer();
    //     // currLetterPointer.pRef.current.focus();
    // }

    const useLogin = (name:string) =>{
        useCurrentUser(name);
        useModalLogin(false);
    }

    // const setLetterPointerRef = (ref:React.RefObject<HTMLElement>) =>{
    //     const newPointer = {...currLetterPointer, ref}
        
    //     setCurrLetterPointer(newPointer);
    // }
    const UpdatePointer = (Ref:React.RefObject<HTMLElement>) =>{
        const newPointer = {...currLetterPointer, pRef:Ref}
        setCurrLetterPointer(newPointer);
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

        currentKeyBoard, 
        
        useModalLogin,
        loginShowState,
        useCurrentUser,
        CurrentUser,

        // currentColorBoard,
        // colorBoardUpdate,
        BoardUpdate,

        useLogin,
        // LetterEnter,
        UpdatePointer
    }
    );

}
