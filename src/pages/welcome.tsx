import {Link} from "react-router-dom";
import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";

export function WelcomePage(){
    
    // const {CurrentUser} = useContext(WordleContext);

    let user = localStorage.getItem('UserName') ? localStorage.getItem('UserName') : 'guest';
    
    return (
        <div className="welcomePage">
            <div className="welcome-header">
            
            </div>
            <div className="welcome-main">
                <h1>hello {user}!</h1>
                <h4>welcome to my wordle game</h4>
                <br></br>
                <h1>Wordle<h6>By Liel</h6></h1>
                <br></br>
                <Link role="button" type="button" className=" start btn btn-info" to={`/wordle`}>START</Link>
            </div>
            
        </div>

    );
}