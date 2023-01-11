import {WordleContext} from "../context/WordleContext";
import { useState, useContext, useRef, useEffect } from "react";


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
    const [loginShowState, setloginShowState] = useState(false);
    const userName = localStorage.getItem('UserName');
    const user = userName? userName:'guest';
    const [CurrentUser, setCurrentUser] = useState(user);
    // const nameRef = useRef(null);

    // useEffect(()=>{
    //     // const name = nameRef.current.value;
    //     setCurrentUser(nameRef.current.value);
    //     localStorage.setItem('UserName', nameRef.current.value);
    // }, [loginShowState])

    // useEffect(()=>{
    //     setCurrentUser('guest');
    // },[]);
    
    
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

    function useModalLogin(show:boolean){

        setloginShowState(show);

    }

    function useCurrentUser(name:string){
        console.log('>>> entered useCurrentUser');
        console.log('>>> name = '+name);
        console.log('>>> entered CurrentUser = ' + CurrentUser);
        setCurrentUser(name); 
        console.log(`>>> set ${CurrentUser} as current user`);
        localStorage.setItem('UserName', name);
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

        
    }
    );

}
