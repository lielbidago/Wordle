import {WordleContext} from "../context/WordleContext";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";
import { LoginModal } from "../components/LoginModal";
import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { StatusModal } from "../components/StatusModal";

export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, useModalHelp, addLetterToBoard,
        moveCurrLetterPointer,enterCurrentUser, currLetterPointer,
        loginShowState,showModalLogin,enterLogin,CurrentUser,
        setmodalShowState,currentBoard,BoardUpdate, keyBoardUpdate,
        currentKeyBoard, LetterEnter,statusWord, toggleStatusModalShow,
        statusModalShow,
    } = WordleAPI;

    const gameRef = useRef(null);

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    const toggleLoginModal = () =>{
        showModalLogin(!loginShowState);
    }

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        
        if(!modalShowState){
            if ("qwertyuioplkjhgfdsazxcvbnm ".includes(event.key)){
            addLetterToBoard((event.key).toUpperCase());
            moveCurrLetterPointer();
            
        }else if(event.key='esc'){
            setmodalShowState(false);
        }
        else{
            (()=>alert('not a letter!'))();
        }
        }
        

    }

    const useLogoutClick = () => {
        enterCurrentUser('guest');
    }



    useEffect(()=>{
        if(currLetterPointer.pRef.current !== undefined){
            currLetterPointer.pRef.current.focus();
        }
        
    }, [currLetterPointer.pRef.current]);


    useEffect(()=>{
        if(currLetterPointer.x ===0 && currLetterPointer.y>0 ){
            BoardUpdate();
        }else if (currLetterPointer.x ===4 && currLetterPointer.y ===4 && currentBoard[4][4].char !==''){
            BoardUpdate();
        }
        
    }, [currLetterPointer]);

    
    useEffect(()=>{
        if((currLetterPointer.x ===0 && currLetterPointer.y>0) || (currLetterPointer.x ===4 && currLetterPointer.y ===4)){
            keyBoardUpdate();
        }
        
    }, [currentBoard]);


    return (
        <WordleContext.Provider value = {WordleAPI}>
            <div className="game" onKeyDown={useKeyboardEnter} ref={gameRef}>
                <header>
                    <span><h1>Wordle</h1><p>By Liel</p></span>
                    <div className="header-section">
                        <p className="header-greeting">Hello, {CurrentUser}! </p>
                        <div className="buttons">
                            <button onClick={useHelpClick} type="button" className="btn btn-info">help</button>
                            <button onClick={CurrentUser==='guest'? toggleLoginModal:useLogoutClick} 
                            type="button" className="btn btn-info">{CurrentUser==='guest'?'login':'logout'}</button>
                        </div>
                    </div>

                </header>
                <WordleScreen currentBoard={currentBoard} currLetterPointer={currLetterPointer}/>
                <Keyboard LetterEnter={LetterEnter} currentKeyBoard={currentKeyBoard}/>
                {modalShowState && <HelpModal useModalHelp={useModalHelp}/>}
                {statusModalShow && <StatusModal toggleStatusModalShow={toggleStatusModalShow} message={statusWord.current} />}
            </div>
            
            {loginShowState && <LoginModal enterLogin={enterLogin} toggleLoginModal={toggleLoginModal}/>}
            
        </WordleContext.Provider>

    

    );


    
    
       

}

