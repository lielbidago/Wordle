import { useState,useRef } from "react";


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

    const keyboardLetters:keyboardLetter[][] = [  [{value:'Q', color:''},{value:'W', color:''},{value:'E', color:''},{value:'R', color:''},{value:'T', color:''},{value:'Y', color:''},{value:'U', color:''},{value:'I', color:''},{value:'O', color:''},{value:'P', color:''}],
                            [{value:'A', color:''},{value:'S', color:''},{value:'D', color:''},{value:'F', color:''},{value:'G', color:''},{value:'H', color:''},{value:'J', color:''},{value:'K', color:''},{value:'L', color:''}],
                            [{value:'Z', color:''},{value:'X', color:''},{value:'C', color:''},{value:'V', color:''},{value:'space', color:''},{value:'B', color:''},{value:'N', color:''},{value:'M', color:''}]];

    const pointerRef = useRef(null);
    
    const [currentBoard, setCurrentBoard] = useState(wordleState);
    const [currentKeyBoard, setCurrentKeyBoard] = useState(keyboardLetters);
    const [currLetterPointer, setCurrLetterPointer] = useState({
    x: 0,
    y: 0,
    pRef: pointerRef});

    const [modalShowState, setmodalShowState] = useState(false);
    const [loginShowState, setloginShowState] = useState(false);

    const userName = localStorage.getItem('UserName');
    const user = userName? userName:'guest';
    const [CurrentUser, setCurrentUser] = useState(user);

    const [gameWord, setgameWord] = useState('');
    const wordsURL = 'http://localhost:3003/words';
    

    function getGameWord():string{
        
        if(gameWord === ''){
            fetch(wordsURL+'/new-word')
            .then(res => res.text()).then(w => setgameWord(w))
            .catch(e => console.log(e));
        }
        
        console.log(gameWord);
        return gameWord;
        
    }


    async function checkedWordArray(currentWord:string, currGameWord:string):Promise<string[]>{
        
        const response = await fetch(wordsURL+'/check-word',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'},
            body:JSON.stringify({currentWord,currGameWord})});
        
        const statusArr = await response.json();
        
        return statusArr;
    }

    function isWord(statusArr:string[]){
        
        let wordStat = true;
        
        statusArr.forEach((s)=>{
            if(s!=='green'){
                wordStat = false;
            }
        });

        return wordStat;
    }

    const currGameWord = getGameWord().toUpperCase();

    
    
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

    function useModalHelp(show:boolean){

        setmodalShowState(show);

    }

    function showModalLogin(show:boolean){

        setloginShowState(show);

    }

    function enterCurrentUser(name:string){

        setCurrentUser(name); 

        localStorage.setItem('UserName', name);
    }


    async function BoardUpdate(){
        
        const prevWordIndex = currLetterPointer.y-1;
        
        const currentWord = currentBoard[prevWordIndex]
        .map((letterObj)=>letterObj.char).join('');

        const wordStatus = await checkedWordArray(currGameWord,currentWord);
        
        const newBoard:wordleLetter[][] = 
        currentBoard.map((line, index)=>{

            if(index===prevWordIndex){
                return currentBoard[index].map((letterObj, index)=>({...letterObj, color:wordStatus[index]}));
            }else{
                return line;
            }}
        );
            
        setCurrentBoard(newBoard);
        if(isWord(wordStatus)){
            alert('success!!!');
            // setTimeout(() => {
            //     window.location.reload();
            // }, 3000);
        }else{
            alert('fail:(');
        }
    }

    function keyBoardUpdate(){

        const changedKeysLst:{[key: string]: string } = {};

        currentBoard.forEach((word) =>{

            word.forEach((letter)=>{

                if(letter.char !== '' && letter.color!=='white'){

                    if(Object.keys(changedKeysLst).includes(letter.char)){
                        
                        const currentColor = changedKeysLst[letter.char]
                        
                        switch(currentColor){
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


        const newKeyBoard:keyboardLetter[][] = currentKeyBoard.map((line)=>(
            line.map((key)=>{
                
                let newKey:keyboardLetter = {...key};
                
                if(Object.keys(changedKeysLst).includes(key.value))
                {
                    newKey = {...key, color:changedKeysLst[key.value]}
                }
                return newKey;
            }
            
            )
            
        ));
        setCurrentKeyBoard(newKeyBoard);
        
    }

    const LetterEnter = (key:string) =>{
        addLetterToBoard(key);
        moveCurrLetterPointer();
        
    }

    const enterLogin = (name:string) =>{
        enterCurrentUser(name);
        showModalLogin(false);
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
        
        showModalLogin,
        loginShowState,
        enterCurrentUser,
        CurrentUser,

        BoardUpdate,

        enterLogin,
        LetterEnter,
        
        keyBoardUpdate
    }
    );

}
