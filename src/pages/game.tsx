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
        moveCurrLetterPointer,enterCurrentUser, currLetterPointer,
        loginShowState,showModalLogin,enterLogin,CurrentUser,
        setmodalShowState,currentBoard,BoardUpdate, keyBoardUpdate 
    } = WordleAPI;

    const gameRef = useRef(null);

    const useHelpClick = (event: React.MouseEvent<HTMLElement>) =>{
        useModalHelp(true);
    }

    const useLoginClick = (event: React.MouseEvent<HTMLElement>) =>{
        showModalLogin(true);
    }

    const useKeyboardEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if ("qwertyuioplkjhgfdsazxcvbnm ".includes(event.key) && !modalShowState){
            addLetterToBoard((event.key).toUpperCase());
            moveCurrLetterPointer();
            
        }else if(event.key='esc'){
            setmodalShowState(false);
        }
        else{
            (()=>alert('not a letter!'))();
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
        if(currLetterPointer.x ===0 && currLetterPointer.y>0 ){
            keyBoardUpdate();
        }
        
    }, [currentBoard]);


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
                {modalShowState && <HelpModal useModalHelp={useModalHelp}/>}
                
            </div>
            
            {loginShowState && <LoginModal enterLogin={enterLogin}/>}
            
        </WordleContext.Provider>

    

    );


    
    
       

}

