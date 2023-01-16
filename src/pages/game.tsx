import {WordleContext} from "../context/WordleContext";
import {WordleScreen} from "../components/WordleScreen";
import { Keyboard } from "../components/keyboard";
import {useWordle} from "../hooks/wordleHooks";
import {HelpModal} from "../components/WordleModal";
import { LoginModal } from "../components/LoginModal";

import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';


export function GamePage(){

    const WordleAPI = useWordle();
    const {modalShowState, useModalHelp, addLetterToBoard,
         moveCurrLetterPointer, currLetterPointer, loginShowState, useModalLogin,
          CurrentUser, useCurrentUser, setmodalShowState,currentColorBoard,currentBoard,colorBoardUpdate } = WordleAPI;

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    useEffect(()=>{
        currLetterPointer.pRef.current.focus();
    }, [currLetterPointer.pRef.current]);

    useEffect(()=>{
        if(currLetterPointer.x ===0 && currLetterPointer.y>0 ){
            colorBoardUpdate(currentColorBoard,currLetterPointer,currentBoard);
        }
        
    }, [currLetterPointer]);

    useEffect(()=>{
        currentColorBoard.forEach((line:string[], lineIndex)=>{
            line.forEach((tile:string, tileIndex)=>{

                const tilePlace = 't-'+(tileIndex).toString()+":"+(lineIndex).toString();
                const tileElement = document.getElementById(tilePlace);
                const colors = ['rgba(218, 218, 218, 0.76)',
                                'rgba(18, 226, 198, 0.76)',
                                'rgba(255, 224, 131, 0.76)']

                tileElement.style.backgroundColor = tile.slice(2);
        
                if(colors.includes(tileElement.style.backgroundColor))
                { tileElement.style.color = 'white'};
                
                if(tile !== '' ){
                    
                    const keyElement = document.getElementById('k-'+tile.slice(0,1));
                    keyElement.style.backgroundColor = tile.slice(2);
                }

            })
        })
    }, [currentColorBoard])

    const useLoginClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalLogin(true);
    }

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
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

