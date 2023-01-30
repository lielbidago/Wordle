import 'bootstrap/dist/css/bootstrap.css';
import './key.scss';
import { keyboardLetter } from "../hooks/wordleHooks";

interface props{
    letter:keyboardLetter;
    key:string;
    LetterEnter: (key:string)=>void
}
export default function Key(props:props){

    const {letter, LetterEnter} = props;

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>{
        LetterEnter(letter.value);
    }
    
    return (
        <button type="button" className={"key btn btn-outline-dark "+letter.color} 
        id={'k-'+letter.value}
        onClick={handleClick}>{letter.value}</button>
    );

}