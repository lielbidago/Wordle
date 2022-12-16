import {Link} from "react-router-dom";

export function WelcomePage(){
    return (
        <>
            <h1>hello guest!</h1>
            <br></br>
            <br></br>
            <h3>welcome to my wordle game</h3>
            <br></br>
            <br></br>
            <p>start game here:</p>
            <Link role="button" to={`/wordle`}>START</Link>
        </>

    );
}