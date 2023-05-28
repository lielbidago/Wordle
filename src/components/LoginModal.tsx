import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Modal.scss';


interface helpModalProps{
    enterLogin:(name:string)=>void,
    toggleLoginModal():void
}

export function LoginModal(props:helpModalProps){
    
    
    const { enterLogin, toggleLoginModal} = props;
    
    const nameRef = useRef(null);

    const handleLogin = (event: React.MouseEvent<HTMLElement>) =>{
        enterLogin(nameRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
    },[]);


    return(
        <div className="modal-backdrop">
        <div className="Modal">
        <div className="Modal-header">
            <h2>Login</h2>
            <button type="button" className="btn-close" aria-label="Close" onClick={()=>toggleLoginModal()}></button>
        </div>
        <form className="login-form">
            <h4>Enter your name: </h4>
            {/* <br/> */}
            <input type="text" ref={nameRef}/>
           <button type="button" className="btn btn-info submit" onClick={handleLogin}>Login</button>
        </form> 
        </div>
        </div>
    );
}