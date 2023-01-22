import {Link} from "react-router-dom";
import './welcome.scss';

export function WelcomePage(){
    
    const UserName = localStorage.getItem('UserName');
    let user = UserName ? UserName : 'guest';
    
    return (
        <div className="welcomePage">
            <div className="welcome-header">
            
            </div>
            <div className="welcome-main">
                <h1>hello {user}!</h1>
                <h4>welcome to my</h4>
                {/* <br></br> */}
                <div className="wordle-icon leRotateYZoomIn"><h1>Wordle</h1></div>
                <h4>game</h4>
                {/* <br></br> */}
                <Link role="button" type="button" className=" start btn btn-info" to={`/wordle`}>START</Link>
            </div>
            
        </div>

    );
}