import {WordleContext} from "../context/WordleContext";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";

import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { LoginModal } from "../components/LoginModal";


export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, useModalHelp, addLetterToBoard,
         moveCurrLetterPointer, currLetterPointer, loginShowState, useModalLogin,
          CurrentUser, useCurrentUser, setmodalShowState} = WordleAPI;

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    useEffect(()=>{
        currLetterPointer.pRef.current.focus();
    })

    const useLoginClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalLogin(true);
    }

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if ("qwertyuioplkjhgfdsazxcvbnm ".includes(event.key)){
            
            // console.log(`current pointer: ${currLetterPointer.x}:${currLetterPointer.y}`);
            addLetterToBoard((event.key).toUpperCase());
            moveCurrLetterPointer();
            
        }else if(event.key='esc'){
            setmodalShowState(false);
        }
        else{
            (()=>alert('not a letter!'))();
        }

    }

    const gameRef = useRef(null);

    const useLogoutClick = () => {
        
        useCurrentUser('guest');
        
    }

    return (
        <WordleContext.Provider value = {WordleAPI}>
            <div className={"game"} onKeyDown={useKeyboardEnter} ref={gameRef}>
                <header>
                    <span><h1>Wordle</h1><p>By Liel</p></span>
                    <div className="header-section">
                        <p className="header-greeting">Hello, {CurrentUser}! </p>
                        <button onClick={useHelpClick} type="button" className="btn btn-info">help</button>
                        <button onClick={CurrentUser==='guest'? useLoginClick:useLogoutClick} type="button" className="btn btn-info">{CurrentUser==='guest'?'login':'logout'}</button>
                    </div>

                </header>
                <WordleScreen/>
                <Keyboard/>
                {modalShowState && <HelpModal/>}
                
            </div>
            
            {loginShowState && <LoginModal/>}
            
        </WordleContext.Provider>

    

    );


    
    
       

}

