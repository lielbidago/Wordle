import React, { useContext, useRef } from "react";
import { WordleContext } from "../context/WordleContext";
import 'bootstrap/dist/css/bootstrap.css';
import './Modal.scss';


export function LoginModal(){
    
    
    const {useModalLogin, useCurrentUser} = useContext(WordleContext);
    const nameRef = useRef(null);

    const useLogin = (event: React.MouseEvent<HTMLElement>) =>{
        useCurrentUser(nameRef.current.value);
        useModalLogin(false);
    }

    const handleInputFocus = (event: React.SyntheticEvent) =>{
        nameRef.current.focus();
    }


    return(
        <div className="modal-backdrop">
        <div className="Modal">
        <div className="Modal-header">
            <h2>Login</h2>
        </div>

        <form className="login-form">
            <h4>Enter your name: </h4>
            <br/>
            <input type="text" ref={nameRef} onLoad={handleInputFocus}/>
           <button type="button" className="btn btn-info submit" onClick={useLogin}>Login</button>
        </form> 
        </div>
        </div>
    );
}